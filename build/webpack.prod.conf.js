const merge = require('webpack-merge');
const config = require('./webpack.base.conf.js');

module.exports = merge(config, {
  mode: "production"
});