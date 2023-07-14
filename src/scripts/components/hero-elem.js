class HeroElem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="hero-container">
      <div class="hero-body">
        <h1>Mau makan dimana hari ini ?</h1>
        <p>Temukan tempat makan populer disini</p>
      </div>
    </section>
    `;
  }
}

customElements.define('hero-elem', HeroElem);
