const {resolve} = require('path');
const webpack = require('webpack');


module.exports = {
    entry: "./src/index.js",
    context: __dirname,
    output: {
        path: resolve(__dirname, './build/'),
        filename: 'application.js',
        publicPath: '/assets/js/'
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /(\.eot|\.woff2|\.woff|\.ttf|\.svg)/, loader: 'url-loader?limit=100000'},
        ],
    },
    devtool: 'source-map',
    devServer: {
        port: 9001,
        historyApiFallback: true
    }
};

