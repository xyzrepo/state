const { resolve } = require('path')

module.exports = async function (moduleOptions) {
  const options = {
    ...this.options['universal-state'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'universal-state.js',
    options
  })
}
//nuxt.options.build.transpile.push(__dirname, 'universal-state')
module.exports.meta = require('../package.json')
