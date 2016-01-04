const fs = require("fs");
const path = require("path");

function getStats () {
  let stats;
  if (process.env.NODE_ENV === "development") {
    stats = fs.readFileSync(path.resolve(__dirname, "../static/build/stats.json"));
    stats = JSON.parse(stats);
  }else {
    stats = require("../static/build/stats.json");
  }

  return stats;
}

module.exports = getStats;
