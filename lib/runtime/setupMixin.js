import Vue from 'vue';
import { forEach, pick, omit } from 'lodash';
function sanitize(data, filters) {
  let { saveProperties, ignoreProperties } = filters;
  let result = (ignoreProperties ? omit(data, ignoreProperties) : data)
  return (saveProperties ? pick(result, saveProperties) : result);
}
export default function setupMixin(store, options) {
  store.namespace = options.namespace
  if (process.browser) {
    if (!Vue.__auto_sync_mixin__) {
      Vue.__auto_sync_mixin__ = true
      Vue.mixin({
        mixins: [{
          watch: {
            $data: {
              handler(v, k) {
                this.saveState(k, v);
                //console.log('watch triggered', v.test2 === k.test2);
              },
              deep: true
            }
          },

          created() {
            this.loadState();
          },

          beforeMount() {
            this.loadState();
          },
          methods: {
            loadState() {
              console.log('loadstate triggered');
              /* const savedState = store.get(options.namespace) ? JSON.parse(savedState) : null;
              if (!savedState) {
                return;
              }
              forEach(savedState, (value, key) => {
                this.$data[key] = value;
              }) */
              store.each((value, key) => {
                this.$data[key] = value;
              })
            },
            saveState() {
              const data = sanitize(this.$data, options);
              store.set(options.namespace, data);
            },

            clearSavedState() {
              store.clearAll(options.namespace);
            }
          }
        }]
      }); // Set up your mixin then
      console.log('Mixin was setup successfully');
    }
  }
}
