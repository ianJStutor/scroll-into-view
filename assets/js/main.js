import { balanceText } from "../../text-balancer.js";

function balanceLinesOfText() {
    const h3 = document.querySelector("header h3");
    balanceText(h3);
}
balanceLinesOfText();
window.addEventListener("resize", balanceLinesOfText);

const input = document.querySelector("main input");
const output = document.querySelector("main output");

input.focus();

input.addEventListener("keyup", addText);
document.querySelector("main button").addEventListener("click", handleClick);

function addText() {
    output.removeAttribute("style");
    output.textContent = input.value.trim();
}

function handleClick() {
    output.style.minHeight = "auto";
    balanceText(output);
}
