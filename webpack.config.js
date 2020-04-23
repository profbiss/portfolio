const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./entry.js",
  context: path.resolve(__dirname, "src"),
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: "pug-loader",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPugin.loader,
            options: {
              reloadAll: true,
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPugin.loader,
            options: {
              reloadAll: true,
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.pug",
      minify: {
        collapseWhitespace: true,
      },
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src/assets/theme/fonts"),
        to: path.resolve(__dirname, "dist"),
      },
      {
        from: path.resolve(__dirname, "src/assets/theme/img"),
        to: path.resolve(__dirname, "dist"),
      },
      {
        from: path.resolve(__dirname, "src/assets/theme/libs"),
        to: path.resolve(__dirname, "dist"),
      },
    ]),
    new CleanWebpackPlugin(),
    new MiniCssExtractPugin({
      filename: "[name].css"
    })
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
