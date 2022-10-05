import ui from "@andrewcaires/ui";
import { App } from "vue";

import "@andrewcaires/ui/src/scss/index.scss";

export const install = (app: App) => app.use(ui);

export default install;
