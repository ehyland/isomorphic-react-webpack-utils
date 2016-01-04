"use strict";

const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "../../");
const srcImgDir = path.resolve(rootDir, "./src/images");
const manifestFile = path.resolve(srcImgDir, "manifest.js");

const headerComment = `This file is auto generated, should only be required from the client bundle`;

fs.readdir(srcImgDir, (err, files) => {

  const images = files
    .filter(filename => filename.match(/\.(jpe?g|png|gif|ico)$/));

  const manifestLines = images
    .map(filename => `"${filename}": require("./${filename}")`);

  const manifest = `/*\n  ${headerComment}\n*/\n\nmodule.exports = {\n  ${manifestLines.join(",\n  ")}\n};`;

  fs.writeFile(manifestFile, manifest, (err) => {
    if (err) {
      console.error("Error generating Image Manifest", err);
    }
    console.log(`Image Manifest created! - ${path.relative(rootDir, manifestFile)}`);
  })
});
