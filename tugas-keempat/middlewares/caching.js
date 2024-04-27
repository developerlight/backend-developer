const cache = require("../utils/cache");

const cacheMiddleware = (req, res, next) => {
  const key = req.originalUrl || req.url;
  const cachedResponse = cache.get(key);

  if (cachedResponse) {
    // console.log("Cache hit for", key);
    return res.send(cachedResponse);
  }

  // console.log("Cache miss for", key);
  res.sendResponse = res.send;
  res.send = (body) => {
    cache.set(key, body);
    res.sendResponse(body);
  };
  next();
};

module.exports = cacheMiddleware;
