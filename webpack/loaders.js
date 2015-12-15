/*eslint no-var:0 */

module.exports = [

  // JSON
  {
    test: /\.json$/,
    loader: "json"
  },

  // Fonts
  {
    test: /\.woff2(\?v=[0-9].[0-9].[0-9])?$/,
    loader: "url?limit=10000&mimetype=application/font-woff2&name=[name].[hash].[ext]"
  },{
    test: /\.woff(\?v=[0-9].[0-9].[0-9])?$/,
    loader: "url?limit=10000&mimetype=application/font-woff&name=[name].[hash].[ext]"
  },{
    test: /\.(ttf|eot|svg)$/,
    loader: "file?name=[name].[hash].[ext]"
  },

  // Other images
  {
    test: /\.(jpe?g|png|gif)$/,
    loader: "file"
  }

];
