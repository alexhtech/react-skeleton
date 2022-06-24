import {
  Configuration,
  // DefinePlugin
} from 'webpack'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'

import ReactRefreshTypeScript from 'react-refresh-typescript'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { resolve } from 'path'

// import { getClientEnvironment } from './env'

// const env = getClientEnvironment()

const extensions = ['.tsx', '.ts', '.js', '.jsx']

export const rootDir = resolve(__dirname, '../')

export const baseConfig = (isDev: boolean): Configuration => ({
  resolve: {
    extensions,
    alias: {},
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              getCustomTransformers: () => ({
                before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
              }),
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    // new DefinePlugin(env.stringified),
    new HtmlWebpackPlugin({
      hash: true,
      template: resolve(__dirname, '../src/index.ejs'),
      templateParameters: {
        title: 'React skeleton',
      },
      filename: resolve(__dirname, '../dist/index.html'),
      chunks: ['main'],
      chunksSortMode: 'auto',
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
})
