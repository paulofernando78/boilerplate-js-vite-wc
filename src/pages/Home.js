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
      <section class="line-break" aria-label="Boilerplate">
        <h1 class="page">Boilerplate</h1>
        <p><b>CSR</b> (Client Side Rendering)</p>
        <div>
          <ul>
            <li>• JS Vanilla</li>
            <li>• Vite</li>
            <li>• Web Components</li>
          </ul>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto corporis, consequuntur corrupti nulla a rem aliquam facilis. Sed ab, tempore aut provident earum obcaecati doloremque saepe, praesentium, impedit hic accusantium?</p>
      </section>
    `;
  }
}

export default Home;

customElements.define("wc-home", Home)
