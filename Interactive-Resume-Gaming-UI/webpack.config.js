var path = require('path');

module.exports = {
  entry: './js/app.js',
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: './bundle.js',
  },
  devtool: 'source-map',
};
