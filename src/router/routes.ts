import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";

export const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/about",
    name: "AboutView",
    component: AboutView,
  },
];

export default routes;
