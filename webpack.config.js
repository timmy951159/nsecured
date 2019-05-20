const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');




module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(scss|sass)$/,
        use: [ 
            {
                loader: "style-loader"
            },
            {
                loader: "css-loader"
            },
            {
                loader: "sass-loader"
            }
        ]
      }
    ]
  }
  
};