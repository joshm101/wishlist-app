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
    ],
  },
  externals: {
    'react/addons': true,
  }
};