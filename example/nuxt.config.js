const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  plugins: [
    //'@plugins/init'
  ],
  modules: [
    { handler: require('../') }
  ],
  build: {
   // transpile: ['@plugins/init']
  }
}
