import { resolve } from 'path'
import { merge } from 'webpack-merge'
import { HotModuleReplacementPlugin } from 'webpack'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

import { baseConfig } from './config.base'

const development = merge(baseConfig(true), {
  entry: ['webpack-hot-middleware/client', './src/index'],
  mode: 'development',
  resolve: {
    alias: {},
  },
  output: {
    path: resolve(__dirname, '../dist/'),
    filename: '[name].js',
    publicPath: '/',
    chunkFilename: '[name].chunk.js',
  },
  devtool: 'source-map',
  optimization: {
    emitOnErrors: true,
  },
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin(), new (ProgressBarPlugin as any)()],
})

export default development
