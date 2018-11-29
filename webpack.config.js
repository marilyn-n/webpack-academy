const commonConfig = require('./build_utils/webpack.common');
const webpackMerge = require('webpack-merge');

const addons = (addonsArg) => {
  return ([]
    .concat
    .apply([], [addonsArg])
    .filter(Boolean)
    .map(addonName => require(`./build_utils/addons/webpack.${addonName}.js`)));
};

module.exports = (env) => {
  console.log(env);
  const envConfig = require(`./build_utils/webpack.${env.env}.js`);
  return webpackMerge(commonConfig, envConfig, ...addons(env.addons));
};
