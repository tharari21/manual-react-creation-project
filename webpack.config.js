const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js", // Tells webpack which file to look at
  output: {
    // Tells webpack where to output the final js file
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
  resolve: {
    // Tell webpack where to look for all its files that it will bundle and what types of files to look for
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"), // Tells webpack which loader to use
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // Loads css files into our react. without this css won't work
      },
      {
        // If you detect any of these files use the file-loader to load
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
    ],
  },
};
