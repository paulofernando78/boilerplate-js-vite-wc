import styleImports from "@css/styles.css?inline";

class Loading extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = styleImports;
    this.shadowRoot.appendChild(style);
  }

  connectedCallback() {
    this.innerHTML = /* html */`
      <style>${styleImports}</style>
      <div class="loading-container">
        <div class="spinner"></div>
        <span>Loading...</span>
      </div>
    `
  }
}

export default Loading;

customElements.define("wc-loading", Loading)
