const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const getClientEnvironment = require('./env');

const env = getClientEnvironment();

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@components': resolve(__dirname, '../src/components/'),
      '@constans': resolve(__dirname, '../src/constans/'),
      '@pages': resolve(__dirname, '../src/pages/'),
      '@routes': resolve(__dirname, '../src/routes/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        enforce: 'pre',
        loader: 'eslint-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
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
                        this.counter = this.counter || 0;
                        return `id-${this.counter++}`;
                      }
                    }
                  }
                }
              ],
              floatPrecision: 2
            }
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(env.stringified),
    new HtmlWebpackPlugin({
      hash: true,
      template: resolve(__dirname, '../src/index.ejs'),
      templateParameters: {
        title: 'React skeleton'
      },
      filename: resolve(
        __dirname,
        env.raw.NODE_ENV === 'development'
          ? '../server/index.html'
          : '../public/index.html'
      ),
      chunks: ['main'],
      chunksSortMode: 'none'
    })
  ]
};
