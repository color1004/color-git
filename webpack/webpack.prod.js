const webpack = require("webpack");
const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env) => {
    return merge(common(env), {
        module: {
            rules: [{
                test: /\.(less|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'less-loader'],
                    publicPath:"../"
                })
            }],
        },
        plugins: [
            //压缩并去掉console.log
            new UglifyJsPlugin({
                uglifyOptions: {
                    sourceMap: false,
                    compress: {
                        warnings: false,
                        drop_console: false
                    }
                }
            }),
            new CleanWebpackPlugin(['dist_m'], 　 //匹配删除的文件
                {
                    root: path.join(__dirname, '../../'), //根目录
                    verbose: true,//开启在控制台输出信息
                    dry: false　　　　　　　　　　 //启用删除文件
                }
            ),
            new ExtractTextPlugin("css/[name].css"),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify("production")
                },
                __DEV__: false,
                serverDomain: JSON.stringify("api.domain.com")
            }),
        ]
    })
};
