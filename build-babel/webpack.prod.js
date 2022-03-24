const path = require('path')
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { srcPath, distPath } = require('./paths')

module.exports = merge(webpackCommonConf, {
    mode: 'production',
    output: {
        filename: 'bundle.[contenthash:8].js',  // add hash stamp
        path: distPath,
        // publicPath: 'http://cdn.abc.com'  // modify all static file url prefix（eg cdn domain name）
    },
    plugins: [
        new CleanWebpackPlugin(), // clean output.path directory
        new webpack.DefinePlugin({
            // window.ENV = 'production'
            ENV: JSON.stringify('production')
        })
    ]
})
