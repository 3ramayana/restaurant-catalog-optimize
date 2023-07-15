import restaurantDbSource from '../../data/restaurantdb-source';
import {
  createRestaurantItemTemplate,
  loadingIndicator,
} from '../templates/template-creator';

const bestResto = {
  async render() {
    return `
    <section class="main-header">
      <h2 tabindex="0">Tempat Rekomendasi</h2>
      <div class="underline"></div>
    </section>
    
    <div id="loading"></div>
    
    <div class="main">
      <div id="resto-list" class="main-body"></div>

      <div class="show-more">
        <a href="#/resto" class="btn btn-cta">Show more...</a>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const main = document.querySelector('.main');
    loading.innerHTML = loadingIndicator();
    main.style.display = 'none';
    const restosContainer = document.querySelector('#resto-list');
    restosContainer.innerHTML = '';

    try {
      const restaurants = await restaurantDbSource.getListResto();
      const bestRestaurants = restaurants
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);
      bestRestaurants.forEach((restaurant) => {
        restosContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (error) {
      main.style.display = 'block';
      loading.style.display = 'none';
      restosContainer.innerHTML = `Error: ${error}, please refresh page`;
    }
  },
};

export default bestResto;
