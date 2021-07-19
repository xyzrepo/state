import Vue from 'vue'
import { pick, omit, isNil, forEach, isEmpty, merge, set, get, unset } from 'lodash'
const localStorage = (typeof window !== 'undefined' ? window.localStorage : global.localStorage)
const sessionStorage = (typeof window !== 'undefined' ? window.sessionStorage : global.sessionStorage)
const state = Vue.observable({})
class SetupSimpleStore {

  constructor(options) {

    this.options = options;
    this.state = state //Vue.observable({})
    //this._state = {} will use this to store keys starting with _
    this._init(options)
    //return { localStorage: }
  }
  _init() {
    //console.log("Init method not implemented.");
  }

  _encode(value) {
    if (typeof value === 'string') {
      return value
    }
    try {
      return JSON.stringify(value)
    } catch (error) {
      return error
    }
  }
  _decode(value) {
    const type = Object.prototype.toString.call(value)
    // If value is an object, return object
    if (type === '[object Object]')// || type === '[object Array]')
      return value
    // If value is somehow undefined, return as is (erroneous code)
    if (type === 'undefined') return value
    // Finally try to parse it as json, or fallback to original value
    try {
      return JSON.parse(value)
    } catch (error) {
      return value
    }
  }
  _read(key) {
    let result = {}; // = this.state
    if (!isNil(localStorage) && this.options.storages.includes('localStorage'))
      merge(result, this._decode(localStorage.getItem(key)))
    if (!isNil(sessionStorage) && this.options.storages.includes('sessionStorage'))
      merge(result, this._decode(sessionStorage.getItem(key)))
    //this._setState(this.state, key, result)
    return result //this.state
  }
  _write(key, value) {
   // this._setState(this.state, key, value)//this.state[key] = value
    try {
      if (!isNil(localStorage) && this.options.storages.includes('localStorage'))
        localStorage.setItem(key, this._encode(value))
      if (!isNil(sessionStorage) && this.options.storages.includes('sessionStorage'))
        sessionStorage.setItem(key, this._encode(value))
    } catch (e) {
      if (!this.options.ignoreExceptions) {
        throw e
      }
    }
    return value
  }
  _remove(key) {
    this._removeState(key)
    if (!isNil(localStorage) && this.options.storages.includes('localStorage'))
      localStorage.removeItem(key)
    if (!isNil(sessionStorage) && this.options.storages.includes('sessionStorage'))
      sessionStorage.removeItem(key)
  }
  _each(fn) {
    forEach(this.state, key => fn(this._read(key), key))
  }
  _sanitize(data) {
    //console.log('Sanitizing data...', data);
    let { saveProperties, ignoreProperties } = this.options;
    let result = (!isEmpty(ignoreProperties) ? omit(data, ignoreProperties) : data)
    result = (!isEmpty(saveProperties) ? pick(result, saveProperties) : result);
    //console.log('Sanitization completed.', result, this.options);
    return result;
  }
  _setState(key, value) { set(this.state, key, value) }
  _getState(key) { get(this.state, key) }
  _removeState(key) { unset(this.state, key) }
  get(key) {
    if (!key || !this.options.namespace) return
    return get(merge(this.state, this._read(this.options.namespace)), key)
    //return this._read(key)
  }
  set(key, value) {
    if (!key || !value || !this.options.namespace) return
    //console.log('Setting Key:', key, value);
    //this.state[key] =
    set(this.state, key, value) //this._sanitize(value))
    this._write(this.options.namespace, this.state)
    return value
  }
  loadState($data) {
    this.state = this._read(this.options.namespace)
    if (isNil(this.state) || isEmpty(this.state) || isNil($data)) return
    forEach(this.state, (value, key) => {
      $data[key] = value
    })
    return this.state
  }
  saveState($data) {
    //console.log('Saving State...', $data);
    this.state = merge(this.state, this._sanitize($data, this.options.filters))
    this._write(this.options.namespace, this.state)
  }
  /* getState($data) {
    let savedState = this._read(this.options.namespace)
    if (isNil(savedState) || isEmpty(savedState)) return
    forEach(savedState, (value, key) => {
              $data[key] = value
    })
    return savedState
  } */
  /* setState($data) {
    console.log('Saving State...', $data);
    let data = this._sanitize($data, this.options.filters)
    this._write(this.options.namespace, data)
  } */
}
export default SetupSimpleStore
