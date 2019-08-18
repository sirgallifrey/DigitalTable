const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const configFile = 'tsconfig.json';

module.exports = {
	entry: {
		index: './src/main.tsx',
	},
	module: {
		rules: [
			{
				test: /(\.ts$)|(\.tsx$)|(\.js$)|(\.jsx$)/,
				use: {
					loader: 'ts-loader',
					options: {
						configFile: configFile
					}
				},
				exclude: /node_modules/,
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							modules: false,
						}
					},
				],
				include: [/node_modules/]
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							modules: {
								mode: 'local',
								// TODO: change to normal hash on production build
								localIdentName: '[path]_[name]__[local]--[hash:base64:5]',
							}
						}
					},
				],
				exclude: [/node_modules/]
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'file-loader'
					},
					{
						loader: 'svgo-loader',
						options: {
							plugins: [
								{ removeTitle: true },
								{ convertColors: { shorthex: false } },
								{ convertPathData: false }
							]
						}
					}
				]
			},
			{ test: /\.(jpg|gif|png|mp4)$/, use: [{ loader: 'file-loader' }] },
			{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, use: [{ loader: 'file-loader' }] },
			{ test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, use: [{ loader: 'file-loader' }] },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: [{ loader: 'file-loader' }] },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: [{ loader: 'file-loader' }] }
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
		plugins: [new TsconfigPathsPlugin({ configFile })]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./public/index.ejs",
			filename: "./index.html",
			templateParameters: {
				'PUBLIC_URL': ''
			},
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	],
};