import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
