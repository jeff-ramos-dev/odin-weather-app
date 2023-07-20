const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devServer: {
    client: {
      overlay: false
    }
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        filename: './index.html',
        template: './src/index.html',
        title: 'Weather App',
        header: "What's the Weather?"
    }),
  ],
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|jpg)$/i,
            type: 'asset/resource',
        },
    ],
  },
};