const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

let mode = 'development';
let devMode = true;

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  devMode = false;
}

module.exports = {
  target: 'web',
  mode,
  entry: './src/index.js',
  devtool: devMode ? 'source-map' : false,

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true, 
  },

  devServer: {
    hot: false,
    host: 'localhost',
    open: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },

  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },

  module: {
    rules: [
      { 
        test: /\.(html)$/, use: ['html-loader'] 
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === 'production' ? 'asset' : 'asset/resource',
        
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },

  plugins: 
    [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new ESLintPlugin(),
    ],
}
