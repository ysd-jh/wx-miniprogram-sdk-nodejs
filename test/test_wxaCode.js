const mocha = require('mocha');
const assert = require("assert");

const redis = require("redis"),
    conf = require('./conf.json'),
    redisClient = redis.createClient(6379, '127.0.0.1'),
    wxApplet = new (require('../lib'))(conf.appId, conf.secret, redisClient);

describe('testWxaCode', () => {
    
    it('createQRCode', async () => {
        let accessToken = await wxApplet.accessToken.getAccessToken();
        let result = await wxApplet.wxaCode.createQRCode(accessToken, 'https://www.baidu.com', {});
        assert(result != null, '');
    });

    it('get', async () => {
        let accessToken = await wxApplet.accessToken.getAccessToken();
        let result = await wxApplet.wxaCode.get(accessToken, 'https://www.baidu.com', {});
        assert(result != null, '');
    });

    it('getUnlimited', async () => {
        let accessToken = await wxApplet.accessToken.getAccessToken();
        let result = await wxApplet.wxaCode.getUnlimited(accessToken, 'https://www.baidu.com', 'a=1', {});
        assert(result != null, '');
    });
});