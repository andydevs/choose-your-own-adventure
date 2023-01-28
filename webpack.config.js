/**
 * Exactly what it says on the tin
 * 
 * Author:  Anshul Kharbanda
 * Created: 10 - 26 - 2020
 */
const path = require('path')

// Constants
const contentDir = path.resolve(__dirname, 'public')

// Webpack config
module.exports = {
    mode: process.env.NODE_ENV || 'production',
    devtool: 'source-map',
    entry: {
        main: './app/index.js',
        paths: './app/paths.js'
    },
    output: {
        path: contentDir,
        filename: '[name].bundle.js'
    },
    devServer: {
        static: {
            directory: contentDir
        },
        historyApiFallback: true,
        compress: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                exclude: /node_modules/,
                use: 'file-loader'
            },
            {
                test: /\.ya?ml$/,
                type: 'json',
                use: 'yaml-loader'
            }
        ]
    }
}