const path = require('path');

module.exports = {
  target: 'web',
  entry: './src/emitter.js',
  module: {
    rules: [
      {
        test: /\.(js|mjs)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'source-map-loader'],
        enforce: 'pre'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
}
