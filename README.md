# Scroll into View

## Ian Marshall

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

### Live Site

> [https://ianjstutor.github.io/scroll-into-view/](https://ianjstutor.github.io/scroll-into-view/)

### Description

I wanted an easy way to trigger a CSS animation when an element first appears in the viewport. This tool keeps an eye on your chosen elements and will insert a class name into that element when it enters the viewport and remove it when it leaves. Additionally (or alternatively), you can give a function as an argument which will be called when the element first enters the viewport and called again when the element leaves the viewport.

Built with vanilla JavaScript, my favorite flavor!

### Usage

Include <code>scroll-into-view.js</code> in your project. Import the JS into your main JavaScript file and call <code>scrollIntoView(element, classname, func)</code>, where <code>element</code> is an HTML element, <code>classname</code> is a class attribute value you want included on your element only while it's in the viewport, and/or optionally a <code>func</code> function that will be called when the element has scrolled into the viewport and also when the element leaves the viewport.

#### HTML

```html
<head>
    <script defer type="module" src="main.js"></script>
</head>
<body>
    <p>Am I in the viewport?</p>
</body>
```

#### CSS

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

#### JavaScript

```js
//main.js
import { scrollIntoView } from "./scroll-into-view.js";
const element = document.querySelector("p");
scrollIntoView(element, "inviewport");
```

### Documentation

#### Module Export

```js
export { scrollIntoView };
```

#### Public Method

```js
function scrollIntoView(element, classnameOrFunc, [func]) {}
```

The <code>element</code> is a required HTML element containing text. 
