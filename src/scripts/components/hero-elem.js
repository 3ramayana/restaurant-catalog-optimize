class HeroElem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="hero-container">
      <div class="hero">
        <picture>
          <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg">
          <img src="./images/heros/hero-image_2-large.jpg" alt="hero image" />
        </picture>
        <div class="hero-body">
          <h1>Mau makan dimana hari ini ?</h1>
          <p>Temukan tempat makan populer disini</p>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('hero-elem', HeroElem);
