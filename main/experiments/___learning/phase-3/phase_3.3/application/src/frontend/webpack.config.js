const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join( __dirname, '/dist' ),
		filename: 'index.js'
	},
	devServer:{
		host: '0.0.0.0'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [ 'babel-loader' ]
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				test: /\.svg$/,
				use: ['svg-inline-loader']
			},
			{
				test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
				use: ['file-loader']
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 100000,
					}
				}]
			}
		]
	},
	plugins: [ new HtmlWebpackPlugin( { template: './public/index.html' } ) ]
};
