const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const autoprefixer = require("autoprefixer");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }

  return config;
};

module.exports = {
  entry: ["@babel/polyfill", "./entry.js"],
  context: path.resolve(__dirname, "src"),
  optimization: optimization(),
  devtool: isDev ? "sourse-map" : "",
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
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer],
            },
          },
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
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer],
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.pug",
      minify: {
        collapseWhitespace: isProd,
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
      filename: "[name].css",
    }),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
