const merge = require('webpack-merge');
const { resolve } = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const base = require('./webpack.config.base');

const { OUTPUT_PATH = '../public/dist', PUBLIC_PATH = '/dist/' } = process.env;

const production = merge(base, {
  mode: 'production',
  entry: './src/index',
  output: {
    filename: '[name].[hash].js',
    path: resolve(__dirname, OUTPUT_PATH),
    publicPath: PUBLIC_PATH,
    chunkFilename: '[name].[hash].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: resolve(__dirname, '../tsconfig.prod.json'),
            transpileOnly: true
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: [new TerserPlugin()]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tsconfig: resolve(__dirname, '../tsconfig.prod.json'),
      async: false
    })
  ]
});

module.exports = production;
