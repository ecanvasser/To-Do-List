const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    project: './src/project.js',
    to_do: './src/to-do.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};