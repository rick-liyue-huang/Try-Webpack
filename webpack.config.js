
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


let mode = 'development';
// here solve the problems of the browser cannot hot load after scss change
let target = 'web';

const plugins = [
	new CleanWebpackPlugin(),
	// mini-css-extract-plugin used to extract the compiled css file as seperated file,
	new MiniCssExtractPlugin(),
	new HtmlWebpackPlugin({
		template: "./src/index.html"
	}),
	// new BundleAnalyzerPlugin()
];

// switch the mode between development and production
if (process.env.NODE_ENV === 'production') {
	mode = 'production'
	target = 'browserslist';

} else {
	plugins.push(new ReactRefreshWebpackPlugin())
}


module.exports = {
	mode: mode,

	target: target,

	entry: './src/index.tsx',

	output: {
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: "images/[hash][ext][query]"
	},

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
			{
				test: /\.tsx?$/i,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader"
				}
			},
			// mini-css-extract-plugin used to extract the compiled css file as seperated file, and it take place of the style-loader, which import css file in js file, while css-loader will execute firstly and then style-loader
			{
				test: /\.(s[ac]|c)ss$/i,
				// sass-loader used to deal with the scss file
				// postcss-loader needs to config with postcss.config.js and .browserslistrc file, it will create the css file with prefix
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {publicPath: ''}
					},
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},

			{
				test: /\.(png|jpg|jpeg|gif|svg)$/i,
				type: "asset", // will automatically inject the image or seperated image by size
				// type: "asset/resource", // will create seperated image file
				// type: "asset/inline", // for the smallest image and this image will inject js file
				parser: {
					dataUrlCondition: {
						maxSize: 30 * 1024 // manual confirm the injected image to js by size
					}
				}
			}
		]
	},

	plugins: plugins,

	// let webpack know about jsx file
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},

	devServer: {
		// let the webpack serve to locate on http://localhost:8080, before is http://localhost:8080/dist/
		contentBase: './dist',
		hot: true, // open hot loading
	}
}
