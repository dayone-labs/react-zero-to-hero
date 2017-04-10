const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")


module.exports = {
	entry: [
		'./src/index.jsx'
	],
	stats: {
		colors: true
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		extensions: ['.js', '.jsx', '.json'],
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel-loader',
			exclude: [/node_modules/, /\.test\.js?$/],
		}, {
			test: /\.json$/,
			exclude: /\.test\.json$/,
			loader: 'json-loader'
		}, {
			test: /\.css/,
			use: [ 'style-loader', 'css-loader' ]
		 //  })
			// loader: ExtractTextPlugin.extract({
			// 	fallbackLoader: 'style-loader',
			// 	loader: [
			// 		'css-loader'
			// 	],
		 //  })
		}]
	},
	plugins: [
		// new ExtractTextPlugin('styles.css'),
		new webpack.ProvidePlugin({
			'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
		}),
	]
}

