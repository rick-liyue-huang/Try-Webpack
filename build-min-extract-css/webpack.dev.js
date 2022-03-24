const path = require('path')
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const { srcPath, distPath } = require('./paths')

module.exports = merge(webpackCommonConf, {
    mode: 'development',
    module: {
        rules: [
            // import image url
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'file-loader'
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'] // add postcss
            },
            {
                test: /\.less$/,
                // add 'less-loader'
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            // window.ENV = 'production'
            ENV: JSON.stringify('development')
        })
    ],
    devServer: {
        port: 8080,
        progress: true,  // show packing process bar
        contentBase: distPath,  // root directory
        open: true,  // open browser automatically
        compress: true,  // open gzip compressing

        // 设置代理
        proxy: {
            // set /api/xxx proxy to localhost:3000/api/xxx
            '/api': 'http://localhost:3000',

            // set /api2/xxx proxy to localhost:3000/xxx
            '/api2': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    '/api2': ''
                }
            }
        }
    }
})
