var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
    return {
        entry: {
            main: path.join(__dirname, '../../src/m/app.js'),
        },
        output: {
            path: path.join(__dirname, "../../dist_m"),
            filename: "js/[name].[hash].js",
        },
        module: {
            rules: [{
                test: /\.js[x]?$/,
                exclude: path.resolve(__dirname, "../../node_modules/"),
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8192,
                        // name: env!="dev"?"img/[name].[ext]":"/img/[name].[ext]" //前面不能加斜杠 否则404
                        name: "img/[name].[ext]" //前面不能加斜杠 否则404
                    }
                }]
            }, {
                test: /\.(svg|ttf|eot|woff|woff2)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "fonts/[name].[ext]" //前面不能加斜杠 否则404
                    }
                }]
            }]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.join(__dirname, "../../src/m/index.html")
            })
        ],
        resolve: {}
    }
}
