var path = require('path');
var cooking = require('cooking');
var webpack = require('webpack');

cooking.set({
  entry: {
    app: ['babel-polyfill', './src/main.js']
  },
  dist: './dist',
  template: './index.tpl',

  devServer: {
    port: 1006,
    publicPath: '/'
  },

  // production
  clean: true,
  hash: true,
  sourceMap: true,
  minimize: true,
  chunk: true, // see https://cookingjs.github.io/zh-cn/configuration.html#chunk
  postcss: [
    require('autoprefixer')
  ],
  publicPath: '/dist/',
  assetsPath: 'static',
  urlLoaderLimit: 10000,
  extractCSS: '[name].[contenthash:7].css',
  alias: {
    'src': path.join(__dirname, 'src')
  },
  extends: ['vue', 'less', 'autoprefixer']
});

cooking.add('plugins.Provide', new webpack.ProvidePlugin({
    $: 'jquery',
    'window.jQuery': 'jquery'
}))
module.exports = cooking.resolve();
