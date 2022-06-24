import merge from 'webpack-merge'
import { resolve } from 'path'
import TerserPlugin from 'terser-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import { CleanPlugin } from 'webpack'

import { baseConfig, rootDir } from './config.base'

const { OUTPUT_PATH = '../dist', PUBLIC_PATH = '/' } = process.env

const production = merge(baseConfig(false), {
  entry: ['./src/index'],
  mode: 'production',
  output: {
    filename: '[name].[fullhash].js',
    path: resolve(__dirname, OUTPUT_PATH),
    publicPath: PUBLIC_PATH,
    chunkFilename: '[name].[fullhash].chunk.js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: resolve(rootDir, 'public'),
            to: resolve(rootDir, 'dist'),
            filter: (filename) => !filename.includes('.gitkeep'),
          },
        ],
      }),
      new CleanPlugin(),
    ],
  },
})

export default production
