class NavMenu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav id="nav" class="container">
      <div class="logo-brand">
        <a href="#" class="logo-brand-link">
          <img src="./images/icons/logo.svg" width="50" alt="logo" />
          <span>Madima</span>
        </a>
      </div>

      <div class="hamburger" id="hamburgerButton">
        <a id="hamburger__item" href="#">☰</a>
      </div>

      <div id="drawer" class="nav-menu">
        <ul class="nav-list">
          <li class="nav-item">
            <a href="#" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Favorite</a>
          </li>
          <li class="nav-item">
            <a
              href="https://www.linkedin.com/in/ismailtaufiq/"
              target="_blank"
              class="nav-link"
              >About Us</a
            >
          </li>
        </ul>
      </div>

    </nav>
    `;
  }
}

customElements.define('nav-menu', NavMenu);
