'strict';

var path = require('path');
var cwd = process.cwd();

const exportsMain = {
  entry: path.join(cwd, 'src/index'),
  output: {
    path: path.join(cwd, 'dist'),
    filename: '[name].js',
    publicPath: './dist/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: cwd,
      query: {
        plugins: ['transform-decorators-legacy'],
        presets: ['es2015', 'stage-0', 'react']
      }
    }]
  }
};

module.exports = exportsMain;
