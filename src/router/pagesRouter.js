import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutusView from "@/views/AboutusView.vue";
import ShopView from "@/views/ShopView.vue";
import ProductView from "@/views/ProductView.vue";
import BlogView from "@/views/BlogView.vue";
import ContactView from "@/views/ContactView.vue";
import ShoppingcartView from "@/views/ShoppingcartView.vue";
import FavoritesView from "@/views/FavoritesView.vue";
import SignupView from "@/views/SignupView.vue";
import LoginView from "@/views/LoginView.vue";
import RecoverAccountView from "@/views/RecoverAccountView.vue";
import ProfileSettingsView from "@/views/ProfileSettings.vue";

/* Create router... */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "default",
      component: HomeView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutusView,
    },
    {
      path: "/shop",
      name: "shop",
      component: ShopView,
    },
    {
      path: "/product",
      name: "product",
      component: ProductView,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/cart",
      name: "cart",
      component: ShoppingcartView,
    },
    {
      path: "/favorites",
      name: "favorites",
      component: FavoritesView,
    },
    {
      path: "/register",
      name: "register",
      component: SignupView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/settings",
      name: "settings",
      component: ProfileSettingsView,
    },
    {
      path: "/recover",
      name: "recover",
      component: RecoverAccountView,
    },
  ],
});

/* export_router_function */
export default router;
