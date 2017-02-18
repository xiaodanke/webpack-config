var htmlWebpackPlugin  = require("html-webpack-plugin");
module.exports = {
	entry:{
		bundle:'./bundle.js',
		abc:'./abc.js'
	},
	output:{
		path:__dirname,
		filename:'./[name].js'
	},
	devServer:{
		
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{test:/\.css$/,loader:'style-loader!css-loader'},
			{test:/\.js$/,loader:'babel-loader'}

		]
	},
	plugins:[
		new htmlWebpackPlugin({
			title:"北京欢迎你",
			filename:"beijing.html",
			chunks:["abc"]
		}),
		new htmlWebpackPlugin({
			title:"北京欢迎你",
			filename:"class.html",
			chunks:["bundle"]//  引入的打包模块
		}),

	]
}