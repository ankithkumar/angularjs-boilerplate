const path = require('path');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const lodash = require('lodash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: lodash.uniq(
        lodash.concat(
            path.resolve(__dirname, './src/index.js'),
            path.resolve(__dirname, 'index.js')
        ).filter(Boolean)
      )
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre",
        exclude: [/@uirouter/]
      },
      { test: /\.js$/, 
        include: /src/, 
        exclude: /node_modules/,
        use: [
          'ng-annotate-loader',
          {
            loader: 'babel-loader',
            options: {
                presets: [
                  ['es2015']
                ]
            }
          }
        ]
      },
      { test: /\.css$/,
         use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }]
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /.html$/,
        exclude: /index.html$/,
        use: 'html-loader'
      }
    ]
  },
  plugins: [
    // cleaning up only 'dist' folder
    new CleanWebpackPlugin(['dist']),
    new ServiceWorkerWebpackPlugin({
      entry: path.join(__dirname, 'src/sw.js'),
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
    })
  ],
  devServer: {
    // static files served from here
    contentBase: path.resolve(__dirname, "./dist/index.html"),
    compress: true,
    port: 8001,
    stats: 'errors-only',
    open: true
  },
  devtool: 'source-map'

};