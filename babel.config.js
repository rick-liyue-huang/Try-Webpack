
// match with babel-looader in webpack.config.js


const plugins = [];

if (process.env.NODE_ENV !== 'production') {
	plugins.push('react-refresh/babel')
}

module.exports = {
	presets: [
		'@babel/preset-env',
		['@babel/preset-react', {runtime: 'automatic'}]
	],
	plugins: plugins
}
