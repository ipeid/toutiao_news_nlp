var fs = require("fs");
var path = require("path");
var webpack = require("webpack");

var themeVariables = {};

module.exports = {
  mode: process.env.NODE_NEV,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/
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
    new ExtractTextPlugin({
      filename: "assets/styles/[name].css",
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      title: "NLP",
      template: resolve(__dirname, "src", "index.html"),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      },
      chunksSortMode: "dependency"
    }),
    new AutoDllPlugin({
      inject: true, // will inject the DLL bundle to index.html
      debug: true,
      filename: "[name].js",
      path: "./dll",
      entry: {
        dll: [
          "react",
          "react-dom",
          "react-router",
          "antd",
          "leaflet",
          "highcharts",
          "immutable",
          "moment",
          "NProgress"
        ]
      }
    })
  ],
  resolve: {
    extensions: [".js", ".css", ".jsx", ".less"]
  }
};
