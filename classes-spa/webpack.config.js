require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devServer: {
        //contentBase: path.join(__dirname, 'dist'),
        static: {
            directory: path.join(__dirname, 'src'),
            watch: true,
        },
        compress: true,
        port: 3000,
        open: true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'style-loader',
                        options: { injectType: 'singletonStyleTag' },
                    },
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    resolve: {
        extensions: [ ".tsx", ".ts", ".js" ]
    },
};