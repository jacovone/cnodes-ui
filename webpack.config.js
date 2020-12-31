const path = require("path");

module.exports = {
  devtool: "inline-source-map",
  mode: "development",
  entry: "./src/index.js",
  output: {
    library: "cnui",
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    compress: true,
    // hot: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-proposal-private-methods"],
          },
        },
      },
    ],
  },
};
