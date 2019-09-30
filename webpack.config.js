var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/Index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /config.js/],    
        query: {
          'presets': ['@babel/preset-react'],
          
          
          'plugins': ['@babel/plugin-transform-react-jsx']
          
        }
      }, {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, '../')
      },
    ]
  }
};
