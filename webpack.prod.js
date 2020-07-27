const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    //devtool: "none", //remove eval function from main.js
    output: {
        filename: "main.[contentHash].js", //cache-busting
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new CleanWebpackPlugin()]
});