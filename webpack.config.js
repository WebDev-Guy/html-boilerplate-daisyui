const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/script.ts",
    output: {
        filename: "script.js",
        path: path.resolve(__dirname, "dist"),
        clean: true, // Ensures only necessary files are kept in the dist folder
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // Extracts CSS into a file
                    "css-loader", // Turns CSS into CommonJS
                    "postcss-loader", // Processes Tailwind/PostCSS directives
                    "sass-loader", // Compiles SCSS to CSS
                ],
            },
            // Optional: Rule for handling image imports in TS/SCSS files
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "./src/assets", to: "assets" },
                { from: "./src/index.html", to: "index.html" }, // Ensures index.html is copied to the root of the dist folder
                { from: "./src/robots.txt", to: "robots.txt" },
                { from: "./src/site.webmanifest", to: "site.webmanifest" },
            ],
        }),
    ],
    mode: 'development',
    devtool: false, // Disables source map generation
};
