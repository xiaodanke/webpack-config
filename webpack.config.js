//var htmlWebpackPlugin  = require("html-webpack-plugin");
module.exports = {
	entry:'./entry.js',
	output:{
		path:__dirname,
		filename:'./bundle.js'
	},
	devServer:{
		
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{test:/\.css$/,loader:'style-loader!css-loader'},
			{test:/\.js$/,loader:'babel-loader'}
		]
	}
	// plugins:[
	// 	new htmlWebpackPlugin({
	// 		title:"北京欢迎你"
	// 	})
	// ]
}