const print = require('../print');

module.exports = {
    printMe: function () {
        print(__dirname);
        print(__filename);
    }
}