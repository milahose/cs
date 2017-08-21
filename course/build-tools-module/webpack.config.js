const path = require('path');

const config = {
	entry: './client/index.js',
	output: {
		path: path.join(__dirname, '/build'),
		publicPath: "/build/",
    filename: 'webpack-bundle.js',
  }, 
  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        }
      },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
    ],
  },
}

module.exports = config; 
