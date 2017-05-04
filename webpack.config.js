const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, 'client/src/react/components/app.jsx')
    ],
  },

  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react']
        },
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      { 
        test: /\.png$/, 
        loader: "url-loader?limit=100000" 
      },
      { 
        test: /\.jpg$/, 
        loader: "file-loader" 
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: 'url?limit=10000&mimetype=image/svg+xml'
      }
    ],
  },
  externals: {
    'react/addons': true,
  }
};