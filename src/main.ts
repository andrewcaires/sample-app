import "./assets/main.scss";

import { createApp } from "vue";

import modules, { pinia, router } from "@/modules";

import App from "@/App.vue";

import components from "./components";

const app = createApp(App);

app.use(modules);

app.use(pinia);
app.use(router);

app.use(components);

app.mount("#app");
