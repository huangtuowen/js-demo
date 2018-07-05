const merge = require('webpack-merge');
const config = require('./webpack.base.conf.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(config, {
  mode: "production",
  plugins: [
    new UglifyJsPlugin()
  ]
});