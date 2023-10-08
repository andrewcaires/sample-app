import { createRouter, createWebHistory } from "vue-router";

import routes from "./routes";
import { translate } from "../utils";

const router = createRouter({
  history: createWebHistory(),
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
