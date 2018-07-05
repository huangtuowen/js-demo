const path = require('path');
// const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    entry: {
        hello: './src/hello.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    // plugins: [
    //     new VueLoaderPlugin()
    // ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }
        // , {
        //     test: /\.vue$/,
        //     loader: 'vue-loader'
        // }
    ]
    }
};