import styleImports from "@css/styles.css?inline";

class Home extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    /* html */
    this.shadowRoot.innerHTML = `
      <style>${styleImports}</style>
      <section class="line-break">
        <h1 class="page">Boilerplate</h1>
        <div>
          <ul>
            <li>• JS Vanilla</li>
            <li>• Vite</li>
            <li>• Web Components</li>
          </ul>
        </div>
        <p>Lorem ipsum dolor sit amet...</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iste accusantium tempora in ad dolores quas, esse dolorem, odit eligendi temporibus beatae ut vel, quos fugit impedit rerum magni maiores.</p>
      </section>
    `;
  }
}

export default Home;
