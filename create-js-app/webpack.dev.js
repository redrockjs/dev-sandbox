const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const htmlFile = /^([-_\d\w]+).html$/i;
const srcPath = path.resolve(__dirname, '../src');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    port: 5000,
    static: {
      directory: srcPath,
      watch: true,
    },
  },
});