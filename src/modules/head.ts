import { type App } from "vue";
import { createHead } from "@unhead/vue/client";

export const head = createHead();

export const install = (app: App): void => {

  app.use(head);
};

export default install;
