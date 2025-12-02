import "@js/app.js";
import "@css/styles.css";

// Component Button
import Button from "./components/atoms/Button";
customElements.define("wc-button", Button);

// Dark Mode
const darkModeBtn = document.querySelector("wc-button[icon='darkMode']");

darkModeBtn.addEventListener("click", () => {
  const current = document.body.getAttribute("data-theme");
  // Is current theme dark? When clicked use light, otherwise use dark
  const newTheme = current === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", newTheme);
  // Will New theme be dark? If yes, use lightMode, otherwise use darkMode
  darkModeBtn.setAttribute(
    "icon",
    newTheme === "dark" ? "lightMode" : "darkMode"
  );
});

const menuBtn = document.querySelector("wc-button[icon='menu']");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav li a");

menuBtn.addEventListener("nav-click", () => {
  nav.classList.toggle("visible");
});

nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("visible");
  }
});

// Breakpoint animation
const mq = window.matchMedia("(max-width: 700px)");
const layout = document.querySelector(".layout");

function handleBreakpoint(e) {
  if (e.matches) {
    document.body.classList.add("mobile");
    nav.classList.remove("visible");
  } else {
    document.body.classList.remove("mobile");
  }
}

mq.addEventListener("change", handleBreakpoint);
handleBreakpoint(mq);
