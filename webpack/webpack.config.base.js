const webpack = require('webpack')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@common': resolve(__dirname, '../src/components/common/'),
            '@assets': resolve(__dirname, '../assets/'),
            '@constants': resolve(__dirname, '../src/constants/'),
            '@models': resolve(__dirname, '../src/models/'),
            '@utils': resolve(__dirname, '../src/utils/'),
            '@config': resolve(__dirname, '../config/'),
            '@api': resolve(__dirname, '../src/api/'),
            '@ga': resolve(__dirname, '../src/ga/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    emitErrors: false,
                    failOnHint: false
                }
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
                test: /\.svg$/,
                include: /bg/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }
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
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: resolve(__dirname, '../src/index.ejs'),
            templateParameters: {
                title: 'React skeleton'
            },
            filename: resolve(__dirname, isDev ? '../server/index.html' : '../public/index.html'),
            chunks: ['main'],
            chunksSortMode: 'none'
        })
    ]
}
