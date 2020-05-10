const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const base = require('./webpack.config.base')

const development = merge(base, {
  mode: 'development',
  entry: ['@babel/polyfill', 'webpack-hot-middleware/client', './src/index'],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  output: {
    path: resolve(__dirname, '../server/'),
    filename: '[name].js',
    publicPath: '/dist/',
    chunkFilename: '[name].chunk.js',
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, '../public'),
    publicPath: '/',
  },
  optimization: {
    noEmitOnErrors: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin(), new ProgressBarPlugin()],
})

module.exports = development
