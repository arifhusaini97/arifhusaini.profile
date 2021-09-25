import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Podium from '@/components/screen-content/Podium';
import Favourite from '@/components/screen-content/Favourite';
import VoteCenter from '@/components/screen-content/VoteCenter';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/podium',
        name: 'Podium',
        component: Podium,
      },
      {
        path: '/favourite',
        name: 'Favourite',
        component: Favourite,
      },
      {
        path: '/vote-center',
        name: 'VoteCenter',
        component: VoteCenter,
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
