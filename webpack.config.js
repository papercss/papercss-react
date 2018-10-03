const webpack = require("webpack");
const WebpackShellPlugin = require("webpack-shell-plugin-next");
const TimeFixPlugin = require("time-fix-plugin");

const { OUTPUT_PATH, SRC_PATH } = require("./config");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: OUTPUT_PATH,
    filename: "index.js",
    library: "ReactPaperCSS",
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: SRC_PATH,
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: true,
          },
        },
      },
      {
        test: /\.s?css$/,
        include: SRC_PATH,
        exclude: /(node_modules|bower_components|build)/,
        use: [
          "style-loader",
          {
            loader: "typings-for-css-modules-loader",
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              localIdentName: "pprcss_[local]_[hash:base64:5]",
              importLoaders: 1,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        include: SRC_PATH,
        use: {
          loader: "ts-loader",
          options: {
            compilerOptions: {
              declaration: true,
              declarationDir: "build/types",
            },
          },
        },
      },
    ],
  },
  plugins: [
    new TimeFixPlugin(),
    new WebpackShellPlugin({
      onBuildStart: {
        scripts: ["node ./scripts/generateStyleTypings.js"],
        blocking: true,
      },
      dev: process.env.NODE_ENV === "development",
    }),
    new webpack.WatchIgnorePlugin([/\.d\.ts$/]),
  ],
  watchOptions: {
    ignored: ["node_modules", "example", "build", "**/*.d.ts"],
  },
};
