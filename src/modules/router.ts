import { type App } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import { routes } from "@/routes";
import { useHeadStore } from "@/stores";
import { BASE_URL } from "@/utils";

import { translate } from "./translate";

export const router = createRouter({

  history: createWebHistory(BASE_URL),
  routes,

});

router.beforeEach((to, from, next) => {

  const head = useHeadStore();

  head.title = translate(to?.name?.toString() ?? "");

  next();
});

export const install = (app: App): void => {

  app.use(router);
};

export default install;
