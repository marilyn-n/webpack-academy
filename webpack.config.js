const path = require('path');
const ExamplePlugin = require('./ExamplePlugin');
const webpack = require('webpack');

module.exports = (env) => {
  console.log(env);
  return {
    entry: './src/index.js',
    mode: 'development',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist'),
    },
    module: {
      rules: [{
        test: /\.jpe?g$/,
        use: [{
          loader: 'file-loader',
        }, ],
      }, ],
    },
    plugins: [
      new ExamplePlugin(),
      new webpack.ContextReplacementPlugin(),
    ],
  }
};