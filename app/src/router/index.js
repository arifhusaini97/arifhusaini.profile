import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '@/components/screen-content/Login';
import Podium from '@/components/screen-content/Podium';
import Favourite from '@/components/screen-content/Favourite';
import VoteCenter from '@/components/screen-content/VoteCenter';
import store from '@/store';

const routes = [
  {
    name: 'Default',
    beforeEnter: (to, from, next) => {
      if (store.state.session.is_logged_in) {
        return next({
          name: 'Podium',
        });
      } else {
        return next({
          name: 'Login',
        });
      }
    },
  },
  {
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
          requiresAuth: false,
        },
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
    component: () => import('../views/About.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'Default' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.matched.some((record) => record.meta.requiresAuth)) {
    if (
      to.matched[1].meta.requiresAuth === false &&
      store.state.session.is_logged_in
    ) {
      next({ name: 'Podium' });
      return;
    }
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
