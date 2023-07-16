import 'regenerator-runtime'; /* for async await transpile */
import '../styles/styles.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '@fortawesome/fontawesome-free/css/all.css';

// Web Components
import './components/nav-menu';
import './components/hero-elem';
import './components/footer-elem';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
