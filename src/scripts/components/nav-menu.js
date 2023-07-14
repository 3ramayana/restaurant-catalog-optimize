class NavMenu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav id="nav" class="container">
      <div class="logo-brand">
        <a href="#" class="logo-brand-link">
          <img src="./images/icons/favicon.png" width="50" alt="logo" />
          <span>Madima</span>
        </a>
      </div>

      <div class="hamburger" id="hamburgerButton">
        <a id="hamburger__item" href="#">☰</a>
      </div>

      <div id="drawer" class="nav-menu">
        <ul class="nav-list">
          <li class="nav-item">
            <a href="#/resto" class="nav-link">Resto</a>
          </li>
          <li class="nav-item">
            <a href="#/favorite" class="nav-link">Your Favorite</a>
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
