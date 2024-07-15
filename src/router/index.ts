import { createRouter, createWebHistory } from "vue-router";

import { translate } from "@/utils";

import routes from "./routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {

  const title = to.name;

  if (title) {

    document.title = translate(title.toString()) + " - " + import.meta.env.VITE_APP_TITLE;

    return true;
  }

  document.title = import.meta.env.VITE_APP_TITLE;

  return true;
});

export default router;
