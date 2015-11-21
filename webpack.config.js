var webpack = require('webpack');
var path = require('path');

// directories
var jsSrc = path.join(__dirname, '/src/')
var testsDir = path.join(__dirname, '/tests/')
var publicDir = path.join(__dirname, '/public/')

module.exports = {
  devtool: 'inline-source-map',

  entry: [
    './src/entry'
  ],

  output: {
    path: publicDir,
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: require.resolve('react'),
      loader: 'expose?React'
    }, {
      test: /\.jsx?$/,
      loaders:  ['babel'],
      include: [jsSrc, testsDir]
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    }]
  }
};
