const commonPaths = require('./common-paths');

const config = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: commonPaths.outputPath,
  },
};

module.exports = config;
