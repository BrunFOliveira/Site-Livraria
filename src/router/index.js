import CartView from "@/views/CartView.vue";
import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: '/', component: HomeView },
  { path: '/cart', component: CartView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
