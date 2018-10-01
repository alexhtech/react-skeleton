const webpack = require('webpack')
const { resolve } = require('path')

module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@common': resolve(__dirname, '../src/components/common/'),
            '@constants': resolve(__dirname, '../src/constants/'),
            '@stores': resolve(__dirname, '../src/stores'),
            '@models': resolve(__dirname, '../src/models'),
            '@utils': resolve(__dirname, '../src/utils/'),
            '@config': resolve(__dirname, '../config/'),
            '@api': resolve(__dirname, '../src/api/')
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
                NODE_ENV: process.env.NODE_ENV === 'development' ? '"development"' : '"production"'
            }
        })
    ]
}
