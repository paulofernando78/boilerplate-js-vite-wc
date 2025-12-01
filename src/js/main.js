import "@js/app.js";
import "@css/styles.css";

// Component Button
import Button from "./components/atoms/Button";
customElements.define("wc-button", Button);

const menuBtn = document.querySelector("wc-button[icon='menu']");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav li a");

menuBtn.addEventListener("nav-click", () => {
  nav.classList.toggle("visible");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("visible");
  });
});

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
