import { createStore } from "vuex";
import houses from "./modules/houses";

export const store = createStore({
  modules: {
    houses,
  },
});
