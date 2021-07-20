import { CreateStore } from "./state-storage";
import { setupMixin } from "./state-mixin";
import defaultsDeep from 'lodash/defaultsDeep';
export default (app, inject) => {
  let options = <%= JSON.stringify(options, null, 2) %>
  // ====================================================== //
  // =============== Setup Store in Context =============== //
  // ====================================================== //
  options = defaultsDeep(options, {
    namespace: "storage",
    storages: ['localStorage'],
    //saveProperties: [],
    /* nuxt runtime */
    ignoreProperties: [
      "layoutName",
      "nbFetching",
      "isOnline",
      "building",
      "progress",
      "animatedProgress",
      "reconnectAttempts",
      "canSucceed",
      "continuous",
      "percent",
      "reversed",
      "rtl",
      "show",
      "skipTimerCount",
      "duration",
      "throttle"
    ]
  });
  let store = new CreateStore(options);
  inject("store", store);
  // ====================================================== //
  // =============== Setup Presistance Mixin ============== //
  // ====================================================== //
  setupMixin(store);
};
