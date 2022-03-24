const path = require('path')
const webpack = require('webpack')
const webpackCommonConf = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const { srcPath, distPath } = require('./paths')

module.exports = merge(webpackCommonConf, {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        static: distPath,
        open: true,
        compress: true,
        hot: true,
        port: 8080,

        // setting proxy
        proxy: {
            // // set /api/xxx proxy to localhost:3000/api/xxx
            '/api': 'http://localhost:3000',

            // set /api2/xxx proxy to localhost:3000/xxx
            '/api2': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    '/api2': ''
                }
            }
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            // window.ENV = 'production'
            ENV: JSON.stringify('development')
        })
    ]
})
