const webpack = require('webpack')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const getClientEnvironment = require('./env')

const env = getClientEnvironment()

const isDev = env.raw.NODE_ENV === 'development'

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@common': resolve(__dirname, '../src/components/common/'),
      '@assets': resolve(__dirname, '../src/assets/'),
      '@pages': resolve(__dirname, '../src/pages/'),
      '@components': resolve(__dirname, '../src/components/'),
      '@hooks': resolve(__dirname, '../src/hooks/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(j|t)sx?$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: isDev,
        },
        exclude: /node_modules/,
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
    new webpack.DefinePlugin(env.stringified),
    new HtmlWebpackPlugin({
      hash: true,
      template: resolve(__dirname, '../src/index.ejs'),
      templateParameters: {
        title: 'React skeleton',
      },
      filename: resolve(
        __dirname,
        env.raw.NODE_ENV === 'development' ? '../server/index.html' : '../public/index.html'
      ),
      chunks: ['main'],
      chunksSortMode: 'none',
    }),
    new ForkTsCheckerWebpackPlugin({
      async: isDev,
    }),
  ],
}
