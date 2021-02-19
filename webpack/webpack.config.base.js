const webpack = require('webpack')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const getClientEnvironment = require('./env')

const env = getClientEnvironment()

const isDev = env.raw.NODE_ENV === 'development'

const extensions = ['.tsx', '.ts', '.js', '.jsx']

module.exports = {
  resolve: {
    extensions,
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
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            cacheDirectory: isDev,
            presets: [
              ['@babel/preset-env', { targets: { browsers: 'last 2 versions' } }],
              '@babel/preset-typescript',
              '@babel/preset-react',
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              '@babel/plugin-proposal-optional-chaining',
              '@babel/plugin-proposal-nullish-coalescing-operator',
              isDev && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
          },
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
    new ESLintPlugin({
      extensions,
      threads: true,
      lintDirtyModulesOnly: isDev,
    }),
  ],
}
