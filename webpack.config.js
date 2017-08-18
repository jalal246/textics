
const { resolve } = require('path');

module.exports = {
  entry: './src/textics',
  output: {
    path: resolve(__dirname, 'dist'),
    library: 'textics',
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', include: resolve(__dirname, 'src') },
    ],
  },
};
