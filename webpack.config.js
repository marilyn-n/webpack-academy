const commonConfig = require('./build_utils/webpack.common');

module.exports = (env) => {
  console.log(env);
  return commonConfig;
};
