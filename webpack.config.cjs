const path = require("path");

module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    library: "cnui",
    filename: "cnodesui.bundle.js",
    path: path.resolve(__dirname, "dist"),
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
