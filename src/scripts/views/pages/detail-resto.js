import restaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import {
  createRestaurantDetailTemplate,
  loadingIndicator,
} from '../templates/template-creator';

const detailResto = {
  async render() {
    return `
    <div id="loading"></div>
    
    <div class="main">
      <div id="resto-data" class="resto-data">
      </div>
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restosContainer = document.querySelector('#resto-data');
    const loading = document.querySelector('#loading');
    const main = document.querySelector('.main');
    loading.innerHTML = loadingIndicator();
    main.style.display = 'none';

    try {
      const restaurant = await restaurantDbSource.getDetailResto(url.id);
      restosContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (error) {
      main.style.display = 'block';
      loading.style.display = 'none';
      restosContainer.innerHTML = `Error: ${error}, please refresh page`;
    }
  },
};

export default detailResto;
