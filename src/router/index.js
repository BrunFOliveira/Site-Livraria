import CartView from "@/components/views/CartView.vue";
import HomeView from "@/components/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: '/', component: HomeView },
  { path: '/cart', component: CartView}
]
