const webpack = require('webpack')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@common': resolve(__dirname, '../src/components/common/'),
      '@assets': resolve(__dirname, '../src/assets/'),
      '@utils': resolve(__dirname, '../src/utils/'),
      '@config': resolve(__dirname, '../config/'),
      '@pages': resolve(__dirname, '../src/pages/'),
      '@components': resolve(__dirname, '../src/components/'),
      '@graphql': resolve(__dirname, '../src/graphql/'),
      '@hooks': resolve(__dirname, '../src/hooks/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          emitErrors: false,
          failOnHint: false,
        },
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: isDev,
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        include: /bg/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
          },
        },
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /bg/,
        use: {
          loader: 'react-svg-loader',
          options: {
            svgo: {
              plugins: [
                {
                  cleanupIDs: {
                    remove: true,
                    minify: true,
                    prefix: {
                      toString() {
                        this.counter = this.counter || 0
                        return `id-${this.counter++}`
                      },
                    },
                  },
                },
              ],
              floatPrecision: 2,
            },
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"',
      },
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: resolve(__dirname, '../src/index.ejs'),
      templateParameters: {
        title: 'Happy project',
      },
      filename: resolve(__dirname, isDev ? '../server/index.html' : '../public/index.html'),
      chunks: ['main'],
      chunksSortMode: 'none',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: isDev,
    }),
  ],
}
