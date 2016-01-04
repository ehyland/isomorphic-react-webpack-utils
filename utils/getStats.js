const fs = require("fs");
const path = require("path");

const statsPath = "../../static/build/stats.json";

function getStats () {
  let stats;
  if (process.env.NODE_ENV === "development") {
    stats = fs.readFileSync(path.resolve(__dirname, statsPath));
    stats = JSON.parse(stats);
  }else {
    stats = require(statsPath);
  }

  return stats;
}

module.exports = getStats;
