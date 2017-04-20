const { resolve } = require('path');
const path = require('path');
const pkg = require('./package.json');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line
const scssExtract = new ExtractTextPlugin('styles.css');

module.exports = {
  entry: {
    index: ['./'],
  },
  context: resolve(__dirname, 'src'),
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: Object.keys(pkg.dependencies),
  output: {
    path: resolve('./lib'),
    filename: '[name].js',
    library: [pkg.name],
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'lib'),
    compress: true,
    port: 9001,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: resolve(__dirname, 'src'),
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [['env', { modules: false }], 'react'],
          plugins: ['transform-class-properties'],
        },
      },
      {
        test: /\.scss$/,
        use: scssExtract.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'resolve-url-loader', {
            loader: 'sass-loader', options: { sourceMap: true },
          }],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
        }),
      },
      {
        test: /\.(woff2?|ttf|svg|eot|jpg|png|gif)?(\?.+)?$/,
        use: [{ loader: 'file-loader', options: { name: '[path][name].[ext]' } }],
      },
    ],
  },
  plugins: [
    scssExtract,
  ],
};
