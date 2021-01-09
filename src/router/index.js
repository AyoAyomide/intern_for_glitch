const { apiCall } = require('@/common/api');
const {
  createRouter,
  createMemoryHistory,
  createWebHistory,
} = require('vue-router');

const isServer = typeof window === 'undefined';

let history = isServer ? createMemoryHistory() : createWebHistory();

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/pages/Home.vue')
  },
];

export function _createRouter() {
  return createRouter({ routes, history });
}
