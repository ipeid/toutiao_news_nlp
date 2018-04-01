var fs = require("fs")
var path = require("path")
var webpack = require("webpack")
var HtmlWebpackPlugin = require('html-webpack-plugin')

var WEBCONFIG = require('./config/webconfig')

var themeVariables = {}
var publicPath = "/"

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js",
        publicPath: "/"
    },
    devServer:{
      contentBase:path.join(__dirname,'dist'),
      port:WEBCONFIG.PORT
    },
    devtool:'eval',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ["babel-loader"],
                type: "javascript/auto",
                include: path.resolve(__dirname, "src"),
                exclude: /node_modules/
            },
            {
              test: /\.(jsx|js)$/,
              enforce: "pre",
              loader: "eslint-loader"
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader",
                        options: {
                            modifyVars: themeVariables
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader:
                    "url-loader?limit=8192&name=assets/image/[name].[ext]&publicPath=" +
                    publicPath
            },
            {
                test: /\.(ttf|eot|svg|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader:
                    "url-loader?limit=8192&name=iconfont/[name].[ext]&publicPath=" +
                    publicPath
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: "react",
            ReactDOM: "react-dom",
            moment: "moment"
        }),
        // new ExtractTextPlugin({
        //     filename: "assets/styles/[name].css",
        //     allChunks: true
        // }),
        new HtmlWebpackPlugin({
            title: "NLP",
            template: path.resolve(__dirname, "src/assets", "index.html"),
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            },
            chunksSortMode: "dependency"
        }),
        // new AutoDllPlugin({
        //     inject: true, // will inject the DLL bundle to index.html
        //     debug: true,
        //     filename: "[name].js",
        //     path: "./dll",
        //     entry: {
        //         dll: [
        //             "react",
        //             "react-dom",
        //             "react-router",
        //             "antd",
        //             "leaflet",
        //             "highcharts",
        //             "immutable",
        //             "moment",
        //             "NProgress"
        //         ]
        //     }
        // })
    ],
    externals:{
      React:'react'
    },
    resolve: {
        extensions: [".js", ".css", ".jsx", ".less"]
    }
}
