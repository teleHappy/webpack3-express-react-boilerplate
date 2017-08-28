const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry:[
		"react-hot-loader/patch",
    	"webpack-hot-middleware/client?http://localhost:3000&reload=true",
    	"./public/index.js"	
	],
	output: {
		path:path.join(__dirname,"public"),
		filename:"bundle.js",
		publicPath:"/dist/"
	},
	module: {
		loaders:[
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			query: {
				presets:["es2015","react"]
			}
		},
		{
			test: /\.html$/,
			loader:"html-loader"
		},
		{
			test: /\.css$/,
			loader: ["style-loader", "css-loader"]
		}]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}