const NodeCache = require('node-cache')

// Create a new cache object with a TTL of 10 minutes and a check period of 2 minutes
const cache = new NodeCache({ stdTTL: 600, checkperiod: 120 })

const cacheMiddleware = (req, res, next) => {
    const key = req.originalUrl || req.url;
    const cachedResponse = cache.get(key);
    console.log('cache', cachedResponse)
    if(cachedResponse) {
        console.log('Cache hit for', key)
        return res.send(cachedResponse);
    } else {
        console.log('Cache miss for', key)
        res.sendResponse = res.send;
        res.send = (body) => {
            cache.set(key, body);
            res.sendResponse(body);
        }
        next();
    }
}

module.exports = cacheMiddleware;