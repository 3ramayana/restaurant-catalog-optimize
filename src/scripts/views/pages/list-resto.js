import restaurantDbSource from '../../data/restaurantdb-source';
import {
  createRestaurantItemTemplate,
  loadingIndicator,
} from '../templates/template-creator';

const listResto = {
  async render() {
    return `
    <section class="main-header">
      <h2 tabindex="0">Semua Restaurant</h2>
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
      const restaurants = await restaurantDbSource.getListResto();
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

export default listResto;
