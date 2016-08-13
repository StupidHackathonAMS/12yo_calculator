var webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./",
    filename: "webpack-bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
