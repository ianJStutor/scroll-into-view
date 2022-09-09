const elems = [],
    debounceDelay = 10; //milliseconds

var debouncer = null;

function scrollIntoView(el, className, callback){
	//validation
	if (!el) return console.warn("scrollIntoView(): missing HTML element");
	if ("string" === typeof el){
		el = document.querySelector(el);
		if (!el) return console.warn("scrollIntoView(): HTML element not found in document");
	}
	else if (!el.nodeType || el.nodeType !== 1) return console.warn("scrollIntoView(): HTML element or element selector expected as first argument");
	if (!className) return console.warn("scrollIntoView(): className and/or callback expected as arguments");
	//start listening for scrolling event
	if (!elems.length) window.addEventListener("scroll", handleScroll);
	//add to observer array
	let obj = {el};
	if ("string" === typeof className) obj.className = className;
	else if ("function" === typeof className) obj.callback = className;
	if (!obj.callback && "function" === typeof callback) obj.callback = callback;
    obj.inviewport = false;
	elems.push(obj);
    //starting in viewport?
	checkElems();
}

function handleScroll(e){
	if (debouncer) clearTimeout(debouncer);
	debouncer = setTimeout(checkElems, debounceDelay);
}

function checkElems(){
	elems.forEach(obj => {
        const {el, className, callback, inviewport} = obj;
		if (elementInViewport(el)){
			if (className && !el.classList.contains(className)) el.classList.add(className);
			if (callback && !inviewport) callback.call(el, true); //just entered viewport
            obj.inviewport = true;
		}
		else {
            if (className && el.classList.contains(className)) el.classList.remove(className);
            if (callback && inviewport) callback.call(el, false); //just left viewport
            obj.inviewport = false;
        }
	});
}

function elementInViewport(el){
	let rect = el.getBoundingClientRect(),
		viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	return !(rect.bottom < 0 || rect.top > viewportHeight);
}

export { scrollIntoView };
