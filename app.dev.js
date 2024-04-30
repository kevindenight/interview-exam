const express = require('express')
const webpack = require('webpack')
const webpackDevConfig = require('./webpack.config.dev')
const config = {
	port: 8081,
	IPv4: '',
}

const app = express()

app.use(express.static('static'))

const compiler = webpack(webpackDevConfig)
const devMiddleware = require('webpack-dev-middleware')(compiler, {
	publicPath: webpackDevConfig.output.publicPath,
	stats: {
		colors: true,
		assets: false,
	},
})

const hotMiddleware = require('webpack-hot-middleware')(compiler)

app.use(devMiddleware)
app.use(hotMiddleware)

app.listen(config.port, function(req, res) {
	console.log(
		'http服务监听启动 ,' +
			'  监听端口:' +
			config.port,
	)
})
