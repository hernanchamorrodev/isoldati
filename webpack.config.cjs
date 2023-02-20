const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        map: './src/js/map.js',
        newImage: './src/js/newImage.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/js')
    }
}