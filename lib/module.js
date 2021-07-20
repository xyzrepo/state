const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const options = {
    ...this.options.state,
    ...moduleOptions
  }
  console.log(__dirname)
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'state-plugin.js',
    options
  })
  this.addPlugin({
    src: resolve(__dirname, 'runtime/setupSimpleMixin.js'),
    fileName: 'state-mixin.js',
    options
  })
  this.addPlugin({
    src: resolve(__dirname, 'runtime/SetupSimpleStore.js'),
    fileName: 'state-storage.js',
    options
  })
}
// nuxt.options.build.transpile.push(__dirname, 'universal-state')
module.exports.meta = require('../package.json')
