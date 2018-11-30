const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const config = {
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.png$/,
      use: ExtractTextWebpackPlugin.extract({
        use: 'css-loader',
        fallback: 'style-loader',
      }),
    }],
  },
  plugins: [
    new ExtractTextWebpackPlugin('styles.css'),
    new UglifyJsWebpackPlugin(),
    new CompressionWebpackPlugin()
  ],

};

module.exports = config;
