import { type App } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import { routes } from "@/routes";
import { BASE_URL } from "@/utils";

export const router = createRouter({

  history: createWebHistory(BASE_URL),
  routes,

});

export const install = (app: App): void => {

  app.use(router);
};

export default install;
