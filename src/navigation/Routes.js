import ListPage from 'pages';
import WishListPage from 'pages/wishlist';
// import NotFoundPage from 'pages/not-found';

export const MainRoutes = [
  {
    path: '/',
    exact: true,
    component: ListPage,
  },
  {
    path: '/wishlist',
    component: WishListPage,
  },
  // {
  //   path: '*',
  //   component: NotFoundPage,
  // },
];
