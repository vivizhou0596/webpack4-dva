const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const Common = require('./webpack.common')

module.exports = merge(Common, {
  mode: 'development',
  plugins: [
    new UglifyJSPlugin(),
  ],
})
