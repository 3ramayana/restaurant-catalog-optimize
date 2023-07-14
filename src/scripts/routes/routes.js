import bestResto from '../views/pages/best-resto';
import listResto from '../views/pages/list-resto';
import favoriteResto from '../views/pages/favorite-resto';
import detailResto from '../views/pages/detail-resto';

const routes = {
  '/': bestResto, // default page
  '/resto': listResto,
  '/favorite': favoriteResto,
  '/detail/:id': detailResto,
};

export default routes;
