const routes = {
  404: "wc-404",
  "/": "wc-home",
  "/about": "wc-about",
  "/contact": "wc-contact",
};

const componentImport = {
  "/": () => import("../pages/Home.js"),
  "/about": () => import("../pages/About.js"),
  "/contact": () => import("../pages/Contact.js"),
  404: () => import("../pages/404.js"),
};

let currentPath = null;

export async function renderRoute() {
  const app = document.querySelector("#app");
  const path = window.location.pathname; // Current route path
  if (path === currentPath) return;
  currentPath = path;
  await (componentImport[path] || componentImport[404])();
  const tagName = routes[path] || "wc-404";

  app.innerHTML = "";
  const element = document.createElement(tagName);
  app.replaceChildren(element);
}

// 👇 Used for navigation without page reload
export function navigateTo(path) {
  // Updates the browser's URL (History API)
  window.history.pushState({}, "", path);
  renderRoute();
}

// 👇 Handles browser navigation (Back/Forward buttons)
window.addEventListener("popstate", renderRoute);
