const path = require('path');
const isDevBuild = process.env.NODE_ENV === 'development';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: isDevBuild ? 'none' : 'production',
  entry: './scripts/index.js',
  // watch: true,
  devtool: isDevBuild ? 'source-map' : 'none',
  devServer: {
    contentBase: './build',
  },
  output: {
    filename: 'bundle.[hash:4].js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyPlugin([
      {
        from: './index.css',
        to: './'
      }
    ])
  ]
};
