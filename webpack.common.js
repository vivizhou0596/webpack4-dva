
const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, './src', 'index.js'), // 入口文件，若不配置webpack4将自动查找src目录下的index.js文件
  },
  output: {
    filename: '[name].bundle.js', // 输出文件名，[name]表示入口文件js名
    path: path.join(__dirname, 'dist'), // 输出文件路径
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader?cacheDirectory',
          options: {
            cacheDirectory: true,
          },
        },
        include: [path.resolve(__dirname, './src')],
        exclude: [path.resolve(__dirname, './node_modules')],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src', 'index.ejs'), // 模板
      filename: 'index.html',
      hash: true, // 防止缓存
    }),
  ],
};
