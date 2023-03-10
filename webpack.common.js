const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    // Plugin will delete output folder contents to ensure fresh
    // content after each build
    new CleanWebpackPlugin(),
    // Make CSS file
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    // Plugins dynamically add script tag to HTML file
    // that will include JS files

    new HtmlWebpackPlugin({
      // Inserts Title tag to HTML template
      title: 'Video Overlay View',
      // Template HTML file
      template: 'src/index.html',
      // Creates new HTML file by name
      filename: 'video_overlay.html',
    }),

    new HtmlWebpackPlugin({
      // Inserts Title tag to HTML template
      title: 'Broadcaster Configuration View',
      // Template HTML file
      template: 'src/config.html',
      // Creates new HTML file by name
      filename: 'config.html',
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // Extract CSS import to JS file to another file
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      // Load images properly
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        // Twitch Dev requires vendor dependencies be bundled separately
        // This will take all node module imports and put them in another
        // file
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        // Combines all CSS being used into one file
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
}
