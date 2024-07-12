const NodeCache = require("node-cache");

// Create a new cache object with a TTL of 10 minutes and a check period of 2 minutes
const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 });

module.exports = cache;