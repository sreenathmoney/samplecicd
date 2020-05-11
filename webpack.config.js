var HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require("glob")
module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },

            {
                test: /\.css$/i,
                loader: ['style-loader', 'css-loader'],
            },
            {   test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    // new CopyPlugin([
    //     { from: 'src', to: 'dist' },
    //   ])
    ],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}