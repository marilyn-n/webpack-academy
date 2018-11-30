const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const config = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.png$/,
        use: ExtractTextWebpackPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader',
        }),
  },
],
  plugins: [
    new ExtractTextWebpackPlugin('styles.css'),
  ],

};

module.exports = config;
