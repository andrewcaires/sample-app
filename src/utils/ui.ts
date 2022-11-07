import { ui } from "@andrewcaires/ui";
import { App } from "vue";

import "@andrewcaires/ui/style";

export const install = (app: App) => app.use(ui);

export default install;
