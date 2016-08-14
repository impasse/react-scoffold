const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'index.html'),
            hash: false,
            inject: true
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=stage-0&presets[]=react&plugins[]=transform-decorators-legacy'],
                exclude: /node_modules/
            }, {
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'url?limit=51200&name=[path][name].[ext]'
            }, {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }, {
                test: /\.css$/,
                loaders: ["style", "css"]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        hot: true,
        historyApiFallback: true
    }
}