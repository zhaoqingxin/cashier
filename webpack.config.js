'use strict';
var path = require('path');
var webpack = require('webpack');

var extensions = ['', '.js', '.jsx', '.styl'];
// 单独样式文件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// 产出html模板
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports =
{
    entry: {
        "tradeAnonymous": path.resolve(__dirname, 'src/script/tradeAnonymous.js'),
        "tradeConfirm": path.resolve(__dirname, 'src/script/tradeConfirm.js'),
        "qpayNoCard": path.resolve(__dirname, 'src/script/qpayNoCard.js'),
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js",
        //publicPath: '../build/'
    },
    resolve: {
        extensions: extensions
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: path.resolve(__dirname, 'node_modules')
            },

            /*{
                test: /\.css/,
                loader: 'style!css'
            },
            {
                test: /\.less/,
                loader: 'style!css!less'
            },*/

            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['url?limit=10000', 'img?minimize']
            }

        ]

    },
    imagemin: {
        gifsicle: { interlaced: false },
        jpegtran: {
            progressive: true,
            arithmetic: false
        },
        optipng: { optimizationLevel: 5 },
        pngquant: {
            floyd: 0.5,
            speed: 2
        },
        svgo: {
            plugins: [
                { removeTitle: true },
                { convertPathData: false }
            ]
        }
    },
    /*plugins: [
        new ExtractTextPlugin("[name].[hash:8].css", {
            allChunks: true,
            disable: false
        })
    ]*/
    plugins: [
        new ExtractTextPlugin("[name].css", {
            allChunks: true,
            disable: false
        }),
        new HtmlWebpackPlugin({
            title: 'chanpay',
            filename: 'tradeAnonymous.html',
            template: './src/views/tradeAnonymous.html',
            chunks: ['tradeAnonymous']
        }),
        new HtmlWebpackPlugin({
            title: 'chanpay',
            filename: 'tradeConfirm.html',
            template: './src/views/tradeConfirm.html',
            chunks: ['tradeConfirm']
        }),
        new HtmlWebpackPlugin({
            title: 'chanpay',
            filename: 'qpayNoCard.html',
            template: './src/views/qpayNoCard.html',
            chunks: ['qpayNoCard']
        })
    ]
};