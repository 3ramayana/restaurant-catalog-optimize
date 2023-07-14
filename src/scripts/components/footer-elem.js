class FooterElem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <p>Copyright © 2023 - Madima</p>
    </footer>
    `;
  }
}

customElements.define('footer-elem', FooterElem);
