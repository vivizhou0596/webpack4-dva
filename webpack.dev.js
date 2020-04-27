
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const Common = require('./webpack.common')

module.exports = merge(Common, {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 调用webpack的热更新插件
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://yapi.cbpmgt.com/mock/92',
        changeOrigin: true,
        headers: {
          Host: 'yapi.cbpmgt.com',
          'X-Requested-With': 'XMLHttpRequest',
        },
      },
    },
  },
})