import { default as SetupSimpleStore } from "../../lib/runtime/SetupSimpleStore";
import { default as setupSimpleMixin } from "../../lib/runtime/setupSimpleMixin";

export default (app, inject) => {
  // ====================================================== //
  // =============== Setup Store in Context =============== //
  // ====================================================== //
  const store = new SetupSimpleStore({
    namespace: "xyz",
    storages: ['localStorage'],
    saveProperties: [],
    ignoreProperties: [
      /* nuxt runtime */
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
  inject("store", store);
  // ====================================================== //
  // =============== Setup Presistance Mixin ============== //
  // ====================================================== //
  setupSimpleMixin(store);
};
