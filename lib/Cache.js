const bluebird = require("bluebird");

function Cache(redisClient) {
    this.redisClient = redisClient;
    if (!redisClient.setAsync) {
        bluebird.promisifyAll(redisClient);
    }
}

Cache.prototype.setCache = async function (k, v, expireMillionSeconds) {
    await this.redisClient.setAsync(k, v);
    if (expireMillionSeconds) {
        await this.redisClient.expireAsync(k, Math.floor(expireMillionSeconds / 1000));
    }
}

Cache.prototype.getCache = async function (k) {
    return this.redisClient.getAsync(k);
}

Cache.prototype.removeCache = async function (k) {
    return this.redisClient.delAsync(k);
}

Cache.prototype.TTL = async function (k) {
    return this.redisClient.ttlAsync(k);
}

module.exports = Cache;