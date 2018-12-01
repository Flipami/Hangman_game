const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: ['./index.js'],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname + "/dist"),
        publicPath: ''
    },
    devServer: {
      contentBase: './dist',
      port: 3000,
    },
    plugins: [
      new HtmlWebpackPlugin({ 
        filename: "index.html",
        template: './index.html' 
      }),
      new MiniCssExtractPlugin({ 
        filename: "[name].css",
        chunkFilename: '[id].css' 
      }),
    ]
}