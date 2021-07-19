const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const options = {
    ...this.options.state,
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'state.js',
    options
  })
}
// nuxt.options.build.transpile.push(__dirname, 'universal-state')
module.exports.meta = require('../package.json')
