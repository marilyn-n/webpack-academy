const commonConfig = require('./build_utils/webpack.common');
const webpackMerge = require('webpack-merge');

module.exports = (env) => {
  console.log(env);
  const envConfig = require(`./build_utils/webpack.${env.env}`); 
  return webpackMerge(commonConfig, envConfig);
};

