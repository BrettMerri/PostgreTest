const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  context: path.join(__dirname, '../server'),
  devtool: 'source-map',
  entry: [
    './routes/index.js',
  ],
  target: 'node',
  output: {
    path: path.join(__dirname, '../server/bin'),
    filename: './server.js',
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'stage-1'],
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              emitFile: false,
            }  
          }
        ]
      },
    ],
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
  ]
};
