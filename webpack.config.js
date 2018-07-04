const path = require('path');

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: {
        hello: './src/hello.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    }
};