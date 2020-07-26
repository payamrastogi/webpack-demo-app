const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //devtool: "none", //remove eval function from main.js
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader", //3. Inject styles into DOM
                    'css-loader', //2. Turns css into commonjs
                    "sass-loader" //1. turns sass into css
                ],
            },
        ],
    },
};