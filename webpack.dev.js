const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
    mode: "development",
    //devtool: "none", //remove eval function from main.js
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
});