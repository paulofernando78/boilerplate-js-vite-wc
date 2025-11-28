import styleImports from "@css/styles.css?inline";

class Home extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

      const style = document.createElement("style");
      style.textContent = styleImports;
      this.shadowRoot.appendChild(style);

    this.container = document.createElement("div");
    this.container.className = "line-break";
    this.shadowRoot.appendChild(this.container);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    /* html */
    this.container.innerHTML = `
      <h1>ABC</h1>
      <h1>Boilerplate</h1>
      <h1>Boilerplate</h1>
      <h1>ABCDEFHIJKLMNOPQRSTUWXYZ</h1>
      <h1>abcdefhiklmnopqrstuwxyz</h1>
      <div>
        <ul>
          <li>• JS Vanilla</li>
          <li>• Vite</li>
          <li>• Web Components</li>
        </ul>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste accusantium tempora in ad dolores quas, esse dolorem, odit eligendi temporibus beatae ut vel, quos fugit impedit rerum magni maiores.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste accusantium tempora in ad dolores quas, esse dolorem, odit eligendi temporibus beatae ut vel, quos fugit impedit rerum magni maiores.</p>
      <p>Lorem ipsum dolor sit amet...</p>
      <p>Lorem ipsum dolor sit amet...</p>
    `;
  }
}

export default Home;
