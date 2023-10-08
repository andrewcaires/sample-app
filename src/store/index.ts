import { modules } from "@andrewcaires/ui";
import { createStore } from "vuex";

import counter from "./modules/counter";

export default createStore({

  modules: {

    ...modules,
    counter,

  },

});
