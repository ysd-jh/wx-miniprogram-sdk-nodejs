const mocha = require('mocha');
const assert = require("assert");

const redis = require("redis"),
    conf = require('./conf.json'),
    redisClient = redis.createClient(6379, '127.0.0.1'),
    wxApplet = new (require('../lib'))(conf.appId, conf.secret, redisClient);

describe('testAccessToken', () => {
    
    it('accessToken', async () => {
        let accessToken = await wxApplet.accessToken.getAccessToken();
        assert(accessToken != null, 'token is null');
    });

});