const { resolve } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config.base');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const development = merge(base, {
  mode: 'development',
  entry: ['@babel/polyfill', 'webpack-hot-middleware/client', './src/index'],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  output: {
    path: resolve(__dirname, '../server/'),
    filename: '[name].js',
    publicPath: '/dist/',
    chunkFilename: '[name].chunk.js'
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    contentBase: resolve(__dirname, '../public'),
    publicPath: '/'
  },
  optimization: {
    noEmitOnErrors: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ProgressBarPlugin(),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: resolve(__dirname, '../tsconfig.dev.json'),
      async: true
    })
  ]
});

module.exports = development;
