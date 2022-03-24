const path = require('path')
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
        filename: '[name].[contenthash:8].js', // name is entry  key
        path: distPath,
        // publicPath: 'http://cdn.abc.com'
    },
    module: {
        rules: [
            // image - consider base64 coding
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {

                        limit: 5 * 1024,

                        // packing in img
                        outputPath: '/img1/',
                    }
                }
            },
            // extract css
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,  // replace style-loader
                    'css-loader',
                    'postcss-loader'
                ]
            },
            // extract less
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,  // replace style-loader
                    'css-loader',
                    'less-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), // clean output.path directory
        new webpack.DefinePlugin({
            // window.ENV = 'production'
            ENV: JSON.stringify('production')
        }),

        // extract css
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css'
        })
    ],

    optimization: {
        // compress css
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    }
})
