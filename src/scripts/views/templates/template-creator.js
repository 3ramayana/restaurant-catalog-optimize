/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantItemTemplate = (restaurant) => `
<div class="card hvr-underline-from-center" tabindex="0">
  <div class="card-image">
    <img class="lazyload" data-src="${API_ENDPOINT.IMG_SMALL_RES(
      restaurant.pictureId
    )}" alt="${restaurant.name}" />
  </div>

  <div class="card-body" tabindex="0">
    <h3 class="card-title" tabindex="0">${restaurant.name}</h3>
    <p class="card-desc" tabindex="0">
      ${`${restaurant.description.slice(0, 70)}...`}
    </p>
  </div>

  <div class="card-footer" tabindex="0">
    <span class="place" tabindex="0">
      <img src="./images/icons/map-marker-alt-solid.svg" alt="" />
      ${restaurant.city}
    </span>
    <span class="rating" tabindex="0">
      <img src="./images/icons/star-solid.svg" alt="" />${
        restaurant.rating
      }</span>
  </div>

  <a href="#/detail/${restaurant.id}" class="btn btn-menu">Book Now</a>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="detail-container" tabindex="0">
      <div class="detail-resto">
        <div class="detail-resto-img">
          <img class="lazyload" data-src="${API_ENDPOINT.IMG_SMALL_RES(
            restaurant.pictureId
          )}" alt="${restaurant.name}" />
        </div>

        <div class="detail-resto-content" tabindex="0">
          <h2 class="card-title" tabindex="0">${restaurant.name}</h2>

          <div class="detail-resto-tags" tabindex="0">
            <span class="resto-rating" tabindex="0">
              <img src="./images/icons/star-solid.svg" alt="" />${
                restaurant.rating
              }</span>
            ${restaurant.categories
              .map(
                (category) =>
                  ` <span class="resto-tag" tabindex="0">${category.name}</span> `
              )
              .join('')}
          </div>

          <p class="resto-desc" tabindex="0">${restaurant.description}</p>

          <div class="resto-location" tabindex="0">
            <span class="place" tabindex="0">
              <img src="./images/icons/map-marker-alt-solid.svg" width="12" alt="" />
              ${restaurant.city}, ${restaurant.address}
            </span>
          </div>
        </div>
      </div>

      <h3 class="review-title card-title" tabindex="0">| Menu </h3>
      <div class="resto-menu">
        <div class="food" tabindex="0">
          <h3 class="title" tabindex="0">Foods</h3>
          ${restaurant.menus.foods
            .map(
              (food) => `
            <div class="food-item" tabindex="0">
              <p><span>🍲</span>${food.name}</p>
              <hr>
            </div>`
            )
            .join('')}
        </div>

        <div class="food" tabindex="0">
          <h3 class="title" tabindex="0">Drinks</h3>
          ${restaurant.menus.drinks
            .map(
              (drink) => `
            <div class="food-item" tabindex="0">
              <p><span>🥤</span>${drink.name}</p>
              <hr>
            </div>`
            )
            .join('')}
        </div>
      </div>

      <div class="review" tabindex="0">
        <h3 class="review-title card-title" tabindex="0">| Reviews</h3>
        <div class="review-list" tabindex="0">
        ${restaurant.customerReviews
          .map(
            (review) => `
          <div class="review-item" tabindex="0">
            <p class="review-name" tabindex="0">${review.name}</p>
            <p class="review-date" tabindex="0">${review.date}</p>
            <p class="review-desc" tabindex="0">${review.review}</p>
          </div>  
          `
          )
          .join('')} 
        </div>
      </div>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

const loadingIndicator = () => `
<div class="loader loader--style8" title="7">
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
    <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
      <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x="8" y="10" width="4" height="10" fill="#333"  opacity="0.2">
      <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x="16" y="10" width="4" height="10" fill="#333"  opacity="0.2">
      <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
    </rect>
  </svg>
</div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  loadingIndicator,
};
