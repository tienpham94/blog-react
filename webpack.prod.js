const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const webpack = require('webpack')

const srcDir = resolve(__dirname, 'src')

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: {
    app: `./index.js`,
    vendor: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:6].js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
          localIdentName: '[name]-[local]-[hash:base64:6]',
          camelCase: true
        }
      }]
    }]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: `./index.html`
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
}
