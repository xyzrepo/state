const engine = require('store/src/store-engine')
const storages = {
  local: require('store/storages/sessionStorage'),
  cookie: require('store/storages/localStorage'),
  session: require('store/storages/cookieStorage'),
  memory: require('store/storages/memoryStorage')
}
const primaryStore = (label) => {
  let list = Object.values(storages).map(storage => storage)
  let primary = list.find(storage => storage.name === label)
  let secondary = list.filter(storage => storage.name !== label)
  return [primary, ...secondary]
}
const setupStore = (label) => engine.createStore(primaryStore(label))//.namespace(`${label}Storage`)
console.log('Store was setup successfully', setupStore);
export default setupStore

// const universalStore = {
//   //name: 'universalStorage',
//   set: function (key, value) { Object.values(stores).forEach(store => store.set(key, value)) },
//   get: function (key) { return stores.local.get(key) },
//   /*  ({
//      ...stores.local.get(key),
//      ...stores.cookie.get(key),
//      ...stores.session.get(key),
//      ...stores.memory.get(key)
//    }), */
//   each: (fn) => {
//     console.log('looping; ', fn);
//     stores.local.each(fn)
//     stores.cookie.each(fn)
//     stores.session.each(fn)
//     stores.memory.each(fn)
//   },
//   remove: (key) => {
//     Object.values(stores).forEach(function (store) {
//       return store.remove(key)
//     });
//   },
//   clearAll: (key) => {
//     Object.values(stores).forEach(function (store) {
//       return store.clearAll(key)
//     });
//   }
// }
const universalStorage = {
  name: 'universalStorage',
  read(key) {
    console.log('reading; ', key);
    let localStoreValue = localStore.get(key)
    let cookieStoreValue = cookieStore.get(key)
    let sessionStoreValue = sessionStore.get(key)
    let memoryStoreValue = memoryStore.get(key)
    return Object.assign({}, localStoreValue, cookieStoreValue, sessionStoreValue, memoryStoreValue);
  },
  write(key, value) {
    localStore.set(key, value)
    cookieStore.set(key, value)
    sessionStore.set(key, value)
    memoryStore.set(key, value)
  },
  each(fn) {
    stores.forEach(function (store) {
      return store.each(fn)
    });
  },
  remove(key) {
    return stores.forEach(function (store) {
      return store.remove(key)
    });
  },
  clearAll(key) {
    return stores.forEach(function (store) {
      return store.clearAll(key)
    });
  }
};

//const setupStore = require('store').createStore(universalStorage)
//engine.createStore(storages)

