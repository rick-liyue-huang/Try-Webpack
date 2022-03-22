
let mode = 'development';
// switch the mode between development and production
if (process.env.NODE_ENV === 'production') {
	mode = 'production'
}

module.exports = {
	mode: mode,

	// use as production mode, and no sourceMap, which can solve the problem of source code location, sourceMap is the info file, in which has the source location info, and easy to get the compile error location. If set devtool: true, or comment devtool, the dist/main.js will contain more info.
	devtool: 'source-map',

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					// babel-loader will transfer the es6 or es7 standard to es5 or lower standard coding style
					// and also need the babel.config.js file to set the environment
					loader: "babel-loader"
				}
			}
		]
	},

	devServer: {
		// let the webpack serve to locate on http://localhost:8080, before is http://localhost:8080/dist/
		contentBase: './dist',
	}
}
