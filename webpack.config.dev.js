const webpack = require('webpack')
const path = require('path')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
	devtool: 'soure-map',
	entry: {
		main: [
			'webpack/hot/dev-server',
			'webpack-hot-middleware/client?noInfo=true&reload=true',
			path.resolve(__dirname, 'src/main.js'),
		],
	},
	output: {
		path: path.resolve(__dirname, '../'),
		filename: 'static/js/[name].js',
		chunkFilename: '[name].min.js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			vue$: path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js'),
			iview$: path.resolve(__dirname, 'node_modules/iview/src/index.js'),
			'@': path.resolve(__dirname, 'src'),
		},
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				include: [
					path.resolve(__dirname),
					path.resolve(__dirname, 'node_modules/iview/src/'),
				],
				use: [
					{
						loader: 'vue-loader',
						options: {
							preserveWhitespace: false,
						},
					},
					{
						loader: 'iview-loader',
						options: {
							prefix: true,
						},
					},
				],
			},
			{
				test: /\.js$/,
				use: ['babel-loader'],
				include: [
					path.resolve(__dirname),
					path.resolve(__dirname, 'node_modules/iview/src/'),
				],
				exclude: [path.resolve(__dirname, 'node_modules/')],
			},
			{
				test: /\.css$/,
				use: ['vue-style-loader', 'css-loader'],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'static/font/[name].[contenthash].[ext]',
					},
				},
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'static/font/[name].[ext]',
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			filename: 'index.html',
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
			},
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new CaseSensitivePathsPlugin(),
	],
}

module.exports = config
