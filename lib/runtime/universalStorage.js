module.exports = {
  name: 'universalStorage',
  read: read,
  write: write,
  each: each,
  remove: remove,
  clearAll: clearAll,
}
function read(key) {
  console.log('reading; ', key);
  let localStoreValue = localStore.get(key)
  let cookieStoreValue = cookieStore.get(key)
  let sessionStoreValue = sessionStore.get(key)
  let memoryStoreValue = memoryStore.get(key)
  return Object.assign({}, localStoreValue, cookieStoreValue, sessionStoreValue, memoryStoreValue);
}

function write(key, value) {
  localStore.set(key, value)
  cookieStore.set(key, value)
  sessionStore.set(key, value)
  memoryStore.set(key, value)
}
function each(fn) {
  stores.forEach(function (store) {
    return store.each(fn)
  });
}
function remove(key) {
  return stores.forEach(function (store) {
    return store.remove(key)
  });
}
function clearAll(key) {
  return stores.forEach(function (store) {
    return store.clearAll(key)
  });
}
