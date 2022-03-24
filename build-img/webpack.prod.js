const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackCommonConf = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const { srcPath, distPath } = require('./paths')

module.exports = merge(webpackCommonConf, {
    mode: 'production',
    output: {
        filename: 'bundle.[contenthash:8].js',  // add，加上 hash stamp
        path: distPath,
        // publicPath: 'http://cdn.abc.com'  // modify all static file url prefix（eg cdn domain name）
    },
    module: {
        rules: [
            // consider base64 coding
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        //  output by base64 if image is smaller than 5kb
                        // otherwise，still use file-loader
                        limit: 5 * 1024,

                        // packing in img1
                        outputPath: '/img1/',

                        // setting image cdn address
                        // publicPath: 'http://cdn.abc.com'
                    }
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), // 会默认清空 output.path 文件夹
        new webpack.DefinePlugin({
            // window.ENV = 'production'
            ENV: JSON.stringify('production')
        })
    ]
})
