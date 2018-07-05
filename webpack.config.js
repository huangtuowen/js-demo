const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    }
};