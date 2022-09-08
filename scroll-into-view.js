const elems = [],
    debounceDelay = 10; //milliseconds

var debouncer = null;

function scrollIntoView(el, className, callback){
	//validation
	if (!el){
		try {console.warn("scrollIntoView(): missing arguments")}
		catch (e) {};
		return;
	}
	if ("string" === typeof el){
		el = document.querySelector(el);
		if (!el){
			try {console.warn("scrollIntoView(): element not found in document")}
			catch (e) {};
			return;
		}
	}
	else if (!el.nodeType || el.nodeType !== 1){
		try {console.warn("scrollIntoView(): element or element selector expected as first argument")}
		catch (e) {};
		return;
	}
	if (!className){
		try {console.warn("scrollIntoView(): className and/or callback expected as arguments")}
		catch (e) {};
		return;
	}
	//start listening for scrolling event
	if (!elems.length) window.addEventListener("scroll", handleScroll);
	//add to observer array
	let obj = {el};
	if ("string" === typeof className) obj.className = className;
	else if ("function" === typeof className) obj.callback = className;
	if (!obj.callback && "function" === typeof callback) obj.callback = callback;
	elems.push(obj);
	checkElems();
}

function handleScroll(e){
	if (debouncer) clearTimeout(debouncer);
	debouncer = setTimeout(checkElems, debounceDelay);
}

function checkElems(){
	elems.forEach(obj => {
		if (elementInViewport(obj.el)){
			if (obj.className) obj.el.classList.add(obj.className);
			if (obj.callback) obj.callback.call(obj.el);
		}
		else if (obj.className) obj.el.classList.remove(obj.className);
	});
}

function elementInViewport(el){
	let rect = el.getBoundingClientRect(),
		viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	return !(rect.bottom < 0 || rect.top > viewportHeight);
}

export { scrollIntoView };
