const webpack = require('webpack')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpackCommonConf = require('./webpack.common.js')
const { srcPath, distPath } = require('./paths')

module.exports = merge(webpackCommonConf, {
    mode: 'production',
    output: {
        // filename: 'bundle.[contenthash:8].js',
        filename: '[name].[contenthash:8].js',
        path: distPath,

    },
    module: {
        rules: [

            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 5 * 1024,

                        outputPath: '/img1/',

                    }
                }
            },

            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },

            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            // window.ENV = 'production'
            ENV: JSON.stringify('production')
        }),


        new MiniCssExtractPlugin({
            filename: 'css/main.[contenthash:8].css'
        })
    ],

    optimization: {

        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],

        // split coding
        splitChunks: {
            chunks: 'all',
            /**
             * initial: entry chunk， do not deal with async one
                async: 异步chunk，only deal with async one
                all: deal with all types
             */

            // caching
            cacheGroups: {
                // the third module
                vendor: {
                    name: 'vendor', // chunk name
                    priority: 1, // has the higher priority and split earlier
                    test: /node_modules/,
                    minSize: 0,  // limit size
                    minChunks: 1  //
                },

                // common module
                common: {
                    name: 'common', // chunk name
                    priority: 0, // lower priority
                    minSize: 0,  // common module size
                    minChunks: 2  // reuse how may time on common module
                }
            }
        }
    }
})
