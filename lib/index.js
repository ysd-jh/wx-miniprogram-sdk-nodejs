function WxApplet(appId, secret, redisClient) {
    let cache = new (require("./Cache"))(redisClient);
    this.accessToken = new (require("./AccessToken"))(appId, secret, cache);
    this.analysis = new (require("./Analysis"))();
    this.auth = new (require('./Auth'))();
    this.customerServiceMessage = new (require('./CustomerServiceMessage'))();
    this.pluginManager = new (require('./PluginManager'))();
    this.security = new (require('./Security'))();
    this.subscribeMessage = new (require('./SubscribeMessage'))();
    this.uniformMessage = new (require('./UniformMessage'))();
    this.updatableMessage = new (require('./UpdatableMessage'))();
    this.userInfo = new (require("./UserInfo"))();
    this.wxaCode = new (require("./WxaCode"))();
    this.wxBizDataCrypt = new (require("./WXBizDataCrypt"))(appId);
}

module.exports = WxApplet;