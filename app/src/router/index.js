import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '@/components/screen-content/Login';
import Podium from '@/components/screen-content/Podium';
import Favourite from '@/components/screen-content/Favourite';
import VoteCenter from '@/components/screen-content/VoteCenter';
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
      {
        path: '/podium',
        name: 'Podium',
        component: Podium,
      },
      {
        path: '/favourite',
        name: 'Favourite',
        component: Favourite,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: '/vote-center',
        name: 'VoteCenter',
        component: VoteCenter,
        meta: {
          requiresAuth: true,
        },
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

router.beforeEach((to, from, next) => {
  if (!to.matched.some((record) => record.meta.requiresAuth)) {
    next();
    return;
  }
  if (store.state.session.is_logged_in) {
    next();
  } else {
    next({ name: 'Login' });
  }
});

router.afterEach((to) => {
  var payload = {
    index: null,
    path: to.path,
  };

  store.dispatch('screen/activateNavigation', payload);

  window.popStateDetected = false;
});

export default router;
