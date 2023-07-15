import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTO: `${CONFIG.BASE_URL}/list`,
  DETAIL_RESTO: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  SEARCH_RESTO: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,
  ADD_REVIEW: `${CONFIG.BASE_URL}/review`,
  IMG_SMALL_RES: (id) => `${CONFIG.BASE_IMAGE_URL_SMALL_RESOLUTION}/${id}`,
  IMG_MEDIUM_RES: (id) => `${CONFIG.BASE_IMAGE_URL_MEDIUM_RESOLUTION}/${id}`,
  IMG_LARGE_RES: (id) => `${CONFIG.BASE_IMAGE_URL_LARGE_RESOLUTION}/${id}`,
};

export default API_ENDPOINT;
