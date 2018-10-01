const merge = require('webpack-merge')
const { resolve } = require('path')
const base = require('./webpack.config.base')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const {
    ENTRY,
    OUTPUT_PATH = '../public/dist',
    PUBLIC_PATH = '/dist/',
    INDEX_PATH = '../public/index.html'
} = process.env

const production = merge(base, {
    mode: 'production',
    entry: ENTRY ? `./src/components/App/${ENTRY}` : './src/index',
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
        new HtmlWebpackPlugin({
            title: 'Powered by react',
            hash: true,
            template: resolve(__dirname, '../src/index.ejs'),
            filename: resolve(__dirname, INDEX_PATH),
            chunks: ['main'],
            chunksSortMode: 'none'
        }),
        new ForkTsCheckerWebpackPlugin({
            tsconfig: resolve(__dirname, '../tsconfig.prod.json'),
            async: false
        })
    ]
})

module.exports = production
