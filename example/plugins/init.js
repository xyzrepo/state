import Vue from 'vue';
import { default as setupSimpleMixin } from '../../lib/runtime/setupMixin'
import { default as setupSimpleStore } from '../../lib/runtime/setupStore';

let store = setupStore('localStorage')

export default (app, inject) => {
// ====================================================== //
// =============== Setup Store in Context =============== //
// ====================================================== //
  inject('store', store)
  // ====================================================== //
  // =============== Setup Presistance Mixin ============== //
  // ====================================================== //
  setupMixin(store, {
    namespace: 'xyz',
    saveProperties: [],
    ignoreProperties: []
  })
}

