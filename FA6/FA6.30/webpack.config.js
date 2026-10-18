
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // File JavaScript đầu vào
    entry: './src/index.js',

    // Cấu hình đầu ra
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name][ext]',
        clean: true
    },

    // Xử lý CSS và hình ảnh
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: 'asset/resource'
            }
        ]
    },

    // Tạo HTML tự động
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],

    // Development mode
    mode: 'development',

    // Development server
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 8081,
        open: true,
        hot: true
    }
};
