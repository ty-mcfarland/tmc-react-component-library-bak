const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx$/,
                exclude: [
                    /node_modules/,
                    /dist/
                ],
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/,
                include: /src/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                        sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                        sourceMap: true,
                        },
                    },
                ],
              },
        ]
    },
    resolve: {
        extensions: ['.jsx', '.js', '.ts', '.tsx', '.scss']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.template.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
          })
    ]
}