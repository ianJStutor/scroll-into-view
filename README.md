> NOTE: There are experimental CSS properties that might achieve the same result but without the use of JavaScript. If your browser supports <code>scroll-timeline</code> or <code>animation-timeline</code> with the values <code>scroll()</code> or <code>view()</code>, then consider using CSS.

# Scroll into View

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Description

I wanted an easy way to trigger a CSS animation when an element first appears in the viewport. This tool keeps an eye on your chosen elements and will insert a class name into that element when it enters the viewport and remove it when it leaves. Additionally (or alternatively), you can give a function as an argument which will be called when the element first enters the viewport and called again when the element leaves the viewport.

Built with vanilla JavaScript, my favorite flavor!

## Author

> [Ian Marshall](https://ianjstutor.github.io/ian-marshall/)

## Live Site

> [https://ianjstutor.github.io/scroll-into-view/](https://ianjstutor.github.io/scroll-into-view/)

## Usage

Include <code>scroll-into-view.js</code> in your project. Import the JS into your main JavaScript file and call <code>scrollIntoView(element, classname, func)</code>, where <code>element</code> is an HTML element, <code>classname</code> is a class attribute value you want included on your element only while it's in the viewport, and/or optionally a <code>func</code> function that will be called when the element has scrolled into the viewport and also when the element leaves the viewport.

### HTML

```html
<head>
    <script defer type="module" src="main.js"></script>
</head>
<body>
    <p>Am I in the viewport?</p>
</body>
```

### CSS

```css
body {
    padding: 150vh 0;
}
p {
    opacity: 0;
    transition: opacity 0.5s;
}
p.inviewport {
    opacity: 1;
}
```

### JavaScript

```js
//main.js
import { scrollIntoView } from "./scroll-into-view.js";
const element = document.querySelector("p");
scrollIntoView(element, "inviewport", isInViewport => console.log(this, "in viewport:", isInViewport));
```

## Documentation

### Module Export

```js
export { scrollIntoView };
```

### Public Method

```js
function scrollIntoView(element, classnameOrFunc, [func]) {}
```

The <code>element</code> is a required HTML element containing text.

If the second argument, <code>classnameOrFunc</code> is a string, then it will be used as a class name. When the HTML element enters the viewport the class name will be added to the element's class list. When the HTML element leaves the viewport the class name will be removed from the element's class list.

If the second argument, <code>classnameOrFunc</code> is a function, then it will be called both when the HTML element first enters the viewport and when it first leaves the viewport. In both cases the <code>this</code> context keyword will point to the HTML element itself. When entering the viewport, the function will be called with the argument <code>true</code> and when leaving the viewport, the function will be called with the argument <code>false</code>.

If the second argument, <code>classnameOrFunc</code> is a function, then a third argument will be ignored.

If the second argument isn't a function but the third argument, <code>func</code>, is a function, then the class name second argument will be added/removed from the HTML element (as above) and the <code>func</code> function will be called (as above) as well.
