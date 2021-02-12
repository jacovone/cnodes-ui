const path = require("path");

let commonConfig = {
  entry: ["@babel/polyfill", "./src/index.mjs"],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        // exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-private-methods",
            ],
          },
        },
      },
    ],
  },
};

let minConfig = {
  ...commonConfig,
  mode: "production",
  output: {
    library: "cnui",
    filename: "cnodesui.min.js",
    path: path.resolve(__dirname, "dist"),
  },
};

let devConfig = {
  ...commonConfig,
  devtool: "source-map",
  mode: "development",
  output: {
    library: "cnui",
    filename: "cnodesui.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

module.exports = [devConfig]; //, minConfig];
