const mocha = require('mocha');
const assert = require("assert");

const redis = require("redis"),
    conf = require('./conf.json'),
    redisClient = redis.createClient(6379, '127.0.0.1'),
    wxApplet = new (require('../lib'))(conf.appId, conf.secret, redisClient);

describe('testWxApplet.analysis', () => {
    
    it('dailyRetain', async () => {
        let token = await wxApplet.accessToken.getAccessToken();
        let dailyRetain = await wxApplet.analysis.getDailyRetain(token, '20191231', '20191231');
        console.log(JSON.stringify(dailyRetain));
        assert(dailyRetain != null, '');
    });

    it('getMonthlyRetain', async () => {
        let token = await wxApplet.accessToken.getAccessToken(),
            result = await wxApplet.analysis.getMonthlyRetain(token, '20191201', '20191231');
        console.log(JSON.stringify(result));
        assert(result != null, '');
    });

    it('getWeeklyRetain', async () => {
        let token = await wxApplet.accessToken.getAccessToken(),
            result = await wxApplet.analysis.getWeeklyRetain(token, '20191223', '20191229');
        console.log(JSON.stringify(result));
        assert(result != null, '');
    });

    it('getDailySummary', async () => {
        let token = await wxApplet.accessToken.getAccessToken(),
            result = await wxApplet.analysis.getDailySummary(token, '20191231', '20191231');
        console.log(JSON.stringify(result));
        assert(result != null, '');
    });

    it('getDailyVisitTrend', async () => {
        let token = await wxApplet.accessToken.getAccessToken(),
            result = await wxApplet.analysis.getDailyVisitTrend(token, '20191231', '20191231');
        console.log(JSON.stringify(result));
        assert(result != null, '');
    });

    it('getMonthlyVisitTrend', async () => {
        let token = await wxApplet.accessToken.getAccessToken(),
            result = await wxApplet.analysis.getMonthlyVisitTrend(token, '20191201', '20191231');
        console.log(JSON.stringify(result));
        assert(result != null, '');
    });

    it('getWeeklyVisitTrend', async () => {
        let token = await wxApplet.accessToken.getAccessToken(),
            result = await wxApplet.analysis.getWeeklyVisitTrend(token, '20191223', '20191229');
        console.log(JSON.stringify(result));
        assert(result != null, '');
    });

    it('getUserPortrait', async () => {
        let token = await wxApplet.accessToken.getAccessToken(),
            result = await wxApplet.analysis.getUserPortrait(token, '20191231', '20191231');
        console.log(JSON.stringify(result));
        assert(result != null, '');
    });

    it('getVisitDistribution', async () => {
        let token = await wxApplet.accessToken.getAccessToken(),
            result = await wxApplet.analysis.getVisitDistribution(token, '20191231', '20191231');
        console.log(JSON.stringify(result));
        assert(result != null, '');
    });

    it('getVisitPage', async () => {
        let token = await wxApplet.accessToken.getAccessToken(),
        result = await wxApplet.analysis.getVisitPage(token, '20191231', '20191231');
        console.log(JSON.stringify(result));
        assert(result != null, '');
    });

});