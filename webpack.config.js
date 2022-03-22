

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
// here solve the problems of the browser cannot hot load after scss change
let target = 'web';

// switch the mode between development and production
if (process.env.NODE_ENV === 'production') {
	mode = 'production'

	target = 'browserslist'
}



module.exports = {
	mode: mode,

	target: target,

	// use as production mode, and no sourceMap, which can solve the problem of source code location, sourceMap is the info file, in which has the source location info, and easy to get the compile error location. If set devtool: true, or comment devtool, the dist/main.js will contain more info.
	devtool: 'source-map',

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					// babel-loader will transfer the es6 or es7 standard to es5 or lower standard coding style
					// and also need the babel.config.js file to set the environment
					loader: "babel-loader"
				}
			},
			// mini-css-extract-plugin used to extract the compiled css file as seperated file, and it take place of the style-loader, which import css file in js file, while css-loader will execute firstly and then style-loader
			{
				test: /\.(s[ac]|c)ss$/i,
				// sass-loader used to deal with the scss file
				// postcss-loader needs to config with postcss.config.js and .browserslistrc file, it will create the css file with prefix
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
			}
		]
	},

	plugins: [
		// mini-css-extract-plugin used to extract the compiled css file as seperated file,
		new MiniCssExtractPlugin()
	],

	// let webpack know about jsx file
	resolve: {
		extensions: ['.js', '.jsx']
	},

	devServer: {
		// let the webpack serve to locate on http://localhost:8080, before is http://localhost:8080/dist/
		contentBase: './dist',
		hot: true, // open hot loading
	}
}
