var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/dist');
var APP_DIR = path.resolve(__dirname, 'client/src/app');

var config =
  {
    entry: APP_DIR + '/index.jsx',
    output: {
      path: BUILD_DIR,
      filename: 'bundle.js',
      publicPath: BUILD_DIR,
    },
    module : {
      loaders : [
        {
          test : /\.jsx?/,
          include : APP_DIR,
          loader : 'babel-loader'
        },
        {
          test: /\.(jpg|jpeg|png|gif)(\?.*)?$/,
          loader: 'file-loader',
          options: {
            name: '[sha512:hash:base64:7].[ext]',
            publicPath: './',
            outputPath: 'images/'
          }  
        }
      ]
    }
  };

module.exports = config;