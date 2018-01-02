var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/js/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
		{ test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: {presets: ['es2015', 'react', 'stage-2']}},
        { test: /\.jsx?/, include: APP_DIR, loader: 'babel'},
        { test: /\.css$/, loader: "style!css" }
    ]
  }
};

module.exports = config;