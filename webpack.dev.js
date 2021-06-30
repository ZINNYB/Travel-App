const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/client/index.js",
  mode: "development",
  devtool: "source-map",
  stats: "verbose",
  module: {
    output: {
      library: {
        name: "Travel",
        type: "var",
      },
    },
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          outputPath: "media",
          publicPath: "media",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: true,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/client/views/index.html",
      filename: "./index.html",
    }),
  ],
};
