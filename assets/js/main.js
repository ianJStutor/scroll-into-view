import { scrollIntoView } from "../../scroll-into-view.js";

document.querySelectorAll("main section").forEach(s => scrollIntoView(s, "inviewport"));
