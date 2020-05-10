const merge = require('webpack-merge')
const { resolve } = require('path')
const TerserPlugin = require('terser-webpack-plugin')

const base = require('./webpack.config.base')

const { OUTPUT_PATH = '../public/dist', PUBLIC_PATH = '/dist/' } = process.env

const production = merge(base, {
  mode: 'production',
  entry: ['@babel/polyfill', './src/index'],
  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, OUTPUT_PATH),
    publicPath: PUBLIC_PATH,
    chunkFilename: '[name].[hash].chunk.js',
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
})

module.exports = production
