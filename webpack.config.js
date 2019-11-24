var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',

    'babel-polyfill',
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'react-hot-loader/babel'],
      }
    ]
  },

  plugins: [
     // webpack moduleに含まれる
     new webpack.HotModuleReplacementPlugin(),
     new webpack.NoEmitOnErrorsPlugin(),  // don't reload if there is an error
  ],

  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: 3000,
    headers: { 'Access-Control-Allow-Origin': '*' } // 必要があれば設定する
  },

  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'cheap-module-eval-source-map'
}
