const path = require('path');
const webpack = require('webpack');
const WebpackShellPlugin = require('webpack-shell-plugin-next');
const TimeFixPlugin = require('time-fix-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true
          }
        }
      },
      {
        test: /\.s?css$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              declaration: true,
              declarationDir: 'types'
            }
          }
        }
      }
    ]
  },
  plugins: [
    new TimeFixPlugin(),
    new WebpackShellPlugin({
      onBuildStart: {
        scripts: ['node ./scripts/generateStyleTypings.js'],
        blocking: true
      },
      dev: process.env.NODE_ENV === 'development'
    }),
    new webpack.WatchIgnorePlugin([/\.d\.ts$/])
  ],
  watchOptions: {
    ignored: ['node_modules', 'example', 'build', '**/*.d.ts']
  }
};
