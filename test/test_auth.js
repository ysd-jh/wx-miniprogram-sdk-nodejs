const mocha = require('mocha');
const assert = require("assert");

const redis = require("redis"),
    conf = require('./conf.json'),
    redisClient = redis.createClient(6379, '127.0.0.1'),
    wxApplet = new (require('../lib'))(conf.appId, conf.secret, redisClient);

describe('testAuth', () => {
    
    it('code2Session', async () => {
        let result = await wxApplet.auth.code2Session('', '', '');
        console.log(JSON.stringify(result));
        assert(result != null, '');
    });

});