const webpack = require("webpack");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = (env, argv) => {
    return merge(common(env), {
        devtool: '#source-map',
        module: {
            rules: [{
                test: /\.(less|css)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "postcss-loader" //注意 ： postcss-loader必须在less-loader前面否则 解析less会报错
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify("development")
                },
                __DEV__: true,
                serverDomain: JSON.stringify("beta-api.domain.com")
            })
        ],
        devServer: {
            //防止刷新404的问题
            historyApiFallback: true,
            disableHostCheck: true,
            host: "poker.jd.com",
            inline: true,
            hot: true,
            port: 8019,
            proxy: [{
                context: ["/cart/**"],
                target: "https://test.com",
                changeOrigin: true,
                bypass: function(req, res, proxyOptions) {},
                onProxyRes: function(proxyRes, req, res) {}
            }]
        }
    })
}
