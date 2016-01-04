/*
  Get a complied image from src/images
*/

function getImageSrc(filename) {
  if (process.env.BROWSER) {
    const manifest = require("../../src/images/manifest");
    return manifest[filename];
  }else{
    const searchPath = "./src/images/" + filename;
    const stats = require("./getStats")();
    if (stats && stats.images) {
      const image = stats.images.find(function (img) {return img.original === searchPath});
      if (image) {
        return image.compiled;
      }
    }
  }
}

module.exports = getImageSrc;
