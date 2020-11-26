const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: false,
        port: 9000,
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(s(a|c)ss)$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },

            {
                test: /\.html$/i,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: false },
                    },
                ],
            },
        ],
    },
});
