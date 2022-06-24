import { createRouter, createWebHistory } from 'vue-router';
import LockView from '../views/LockView.vue';
import CloseView from '../views/CloseView.vue';
import HomeView from '../views/HomeView.vue';
import PassView from '../views/PassView.vue';
import CameraView from '../views/CameraView.vue';

const routes = [
  {
    path: '/',
    name: 'lock',
    component: LockView
  },
  {
    path: '/closed',
    name: 'close',
    component: CloseView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pass',
    name: 'pass',
    component: PassView
  },
  {
    path: '/camera',
    name: 'camera',
    component: CameraView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
