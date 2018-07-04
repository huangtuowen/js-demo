const path = require('path');

module.exports = {
    entry: {
        hello: './src/hello.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
};