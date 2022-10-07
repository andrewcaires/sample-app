import { ui } from "@andrewcaires/ui";
import { App } from "vue";

import "@andrewcaires/ui/dist/style.css";

export const install = (app: App) => app.use(ui);

export default install;
