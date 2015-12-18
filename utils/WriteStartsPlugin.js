/*eslint no-var:0, no-console:0 */

/**
 * Based on https://github.com/FormidableLabs/webpack-stats-plugin/
 */

var fs = require("fs");
var path = require("path");
var mkdirp = require("mkdirp");

var jsFilter = /\.js$/;
var cssFilter = /\.css$/;
var imageFilter = /\.(jpe?g|png|gif|svg)$/;

var WriteStartsPlugin = function (outputPath) {
  this.opts = {};
  this.opts.outputPath = outputPath;
  mkdirp.sync(path.dirname(outputPath));
};

WriteStartsPlugin.prototype.apply = function (compiler) {
  var self = this;
  compiler.plugin("emit", function (curCompiler, callback) {
    var rawStats = curCompiler.getStats().toJson();
    var publicPath = this.options.output.publicPath;

    var stats = {};

    // Add js and css files to stats output
    Object.keys(rawStats.assetsByChunkName)
      .forEach(function(entry) {
        stats[entry] = {
          js: rawStats.assetsByChunkName[entry]
            .filter(asset => jsFilter.test(asset))
            .map(asset => publicPath + asset),
          css: rawStats.assetsByChunkName[entry]
            .filter(asset => cssFilter.test(asset))
            .map(asset => publicPath + asset)
        };
      });

    // Add images to stats
    stats.images = rawStats.modules
      .filter(module => imageFilter.test(module.name))
      .map(module => ({
        original: module.name,
        compiled: publicPath + module.assets[0]
      }));

    fs.writeFile(self.opts.outputPath, JSON.stringify(stats), err => {
      if (err) throw err;
      console.log("Updated stats.json");
      callback();
    });
  });
};

module.exports = WriteStartsPlugin;
