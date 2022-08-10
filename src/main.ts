import { createApp } from "vue";
import App from "./App.vue";

import utils from "./utils";

import router from "./router";
import store from "./store";

import components from "./components";

const app = createApp(App);

app.use(utils);

app.use(router);
app.use(store);

app.use(components);

app.mount("#app");
