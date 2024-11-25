import { type App } from "vue";
import { createPinia } from "pinia";

export const pinia = createPinia();

export const install = (app: App): void => {

  app.use(pinia);
};

export default install;
