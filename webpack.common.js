// Webpack uses this to work with directories
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: ["./src/js/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/wp-content/themes/NAME-SITE-LOCAL/dist/",
    //publicPath: '/dist/',
    filename: "bundle.js",
    chunkFilename: "[id][hash].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules\/(?!(swiper|dom7)\/).*/, /\.test\.jsx?$/],
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  modules: false,
                },
              ],
              "@babel/preset-react",
            ],
            plugins: ["syntax-dynamic-import"],
          },
        },
      },
      {
        test: /\.(scss|sass)$/i, 
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", 
          "postcss-loader", 
          {
            loader: "sass-loader", 
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {                    // new
        test: /\.css$/,
        include: /node_modules/,
        use: [
          "style-loader",  // Injects CSS into the DOM
          "css-loader",    // Handles CSS imports and resolves dependencies
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        type: "asset/resource",
        generator: {
          filename: "./fonts/[name][ext]",
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
  plugins: [
    new BrowserSyncPlugin(
      {
        // browse to http://localhost:3000/ during development,
        // ./public directory is being served
        proxy: "http://localhost:3000/",
        files: ["dist" + "/*.css", "dist" + "/*.js"],
        injectCss: true,
      },
      { reload: false }
    ),
    new MiniCssExtractPlugin(),
  ],
  devtool: false,

  externals: {
    jquery: "jQuery",
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    hot: true,
    historyApiFallback: true, // Allows handling of non-existent routes
  },


};
