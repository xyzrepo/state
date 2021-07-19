import Vue from 'vue'
export default function setupMixin (store, options) {
  if (process.browser) {
    if (!Vue.__auto_sync_mixin__) {
      Vue.__auto_sync_mixin__ = true
      Vue.mixin({
        mixins: [{
          watch: {
            $data: {
              handler () {
                store.saveState(this.$data)
              },
              deep: true
            }
          },
          created () {
            store.loadState(this.$data)
          }
        }]
      })
    }
  }
}
