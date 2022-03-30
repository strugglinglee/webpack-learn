const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// const WorkboxPlugin = require("workbox-webpack-plugin");

const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    // chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.md$/,
        exclude: /node_modules/,
        // loader: path.resolve("./loader/index.js"),
        use: ["loader-learn-loader"],
      },
    ],
  },
  // resolveLoader: {
  //   module: ["node_modules", path.resolve(__dirname, "loaders")],
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Production",
    }),
    new webpack.ProvidePlugin({
      // 告诉webpack如果遇到至少一处`_`变量的模块实例，将lodash package引入并将其提供给需要它的模块
      // _: 'lodash',
      // 与tree shaking配合，去除library中没用到的导出
      join: ["lodash", "join"],
    }),
    // new WorkboxPlugin.GenerateSW({
    //   // 这些选项帮助快速启用 ServiceWorkers
    //   // 不允许遗留任何“旧的” ServiceWorkers
    //   clientsClaim: true,
    //   skipWaiting: true,
    // }),
  ],
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  resolve: {
    //".tsx", ".ts",
    extensions: [".js"],
  },
};
