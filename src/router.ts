import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/Index.vue';
import Alphabet from './views/Alphabet.vue';
import Numbers from './views/Numbers.vue';
import Animals from './views/Animals.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/alphabet',
      name: 'Alphabet',
      component: Alphabet,
    },
    {
      path: '/Numbers',
      name: 'Numbers',
      component: Numbers,
    },
    {
      path: '/Animals',
      name: 'Animals',
      component: Animals,
    },
    {
      path: '*',
      name: 'Index',
      component: Index,
    },
  ],
});
