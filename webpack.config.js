const {merge} = require('webpack-merge');

const commongConfiguration = require('./webpack/common');

module.exports = (_env,{mode})=>{
  const properlyConfig = require(`./webpack/${mode}`);
  const mergedConfig = merge(commongConfiguration,properlyConfig);

  return mergedConfig;
}