import { type App } from "vue";

import HelloWorld from "./HelloWorld.vue";

export const install = (app: App) => {

  app.component("HelloWorld", HelloWorld);
};

export default install;
