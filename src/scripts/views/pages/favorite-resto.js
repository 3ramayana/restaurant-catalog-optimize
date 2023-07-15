import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import {
  createRestaurantItemTemplate,
  loadingIndicator,
} from '../templates/template-creator';

const favoriteResto = {
  async render() {
    return `
    <section class="main-header">
      <h2 tabindex="0">Restaurant Favorite</h2>
      <div class="underline"></div>
    </section>
    
    <div id="loading"></div>
    
    <div class="main">
      <div id="resto-list" class="main-body"></div>
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
      const restaurants = await FavoriteRestoIdb.getAllResto();
      if (restaurants.length === 0) {
        restosContainer.innerHTML = "You don't have Favorite Restaurants";
      }
      restaurants.forEach((restaurant) => {
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

export default favoriteResto;
