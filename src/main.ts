import "./assets/main.scss";

import { createPinia } from "pinia";
import { createApp } from "vue";

import utils from "./utils";

import App from "./App.vue";
import router from "./router";

import components from "./components";

const app = createApp(App);

app.use(utils);

app.use(createPinia());
app.use(router);

app.use(components);

app.mount("#app");
