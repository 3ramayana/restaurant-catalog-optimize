import API_ENDPOINT from '../globals/api-endpoint';

class restaurantDbSource {
  static async getListResto() {
    const response = await fetch(API_ENDPOINT.LIST_RESTO);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTO(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  // TODO
  // static async getSearchResto(query) {
  //   const response = await fetch(API_ENDPOINT.SEARCH_RESTO(query));
  //   const responseJson = await response.json();
  // }

  // TODO
  // static async addReview() {}
}

export default restaurantDbSource;
