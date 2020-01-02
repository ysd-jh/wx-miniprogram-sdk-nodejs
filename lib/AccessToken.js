const requestUtil = require("./requestUtil");

/**
 * 接口调用凭证
 * @param {*} appId 小程序唯一凭证，即 AppID
 * @param {*} secret 小程序唯一凭证密钥
 */
function AccessToken(appId, secret, cache) {
    this.appId = appId;
    this.secret = secret;
    this.cache = cache;
}

AccessToken.prototype.getAccessToken = async function () {
    let cachedAccessToken = await this.cache.getCache(`wx-applet-accesstoken-${this.appId}`);
    if (cachedAccessToken) {
        return cachedAccessToken;
    }
    return this.getNewAccessToken();
}

AccessToken.prototype.getNewAccessToken = async function () {
    let response = await requestUtil.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${this.appId}&secret=${this.secret}`),
        json = await response.json();
    if (json.errcode) {
        throw new Error(`error occured with wx,${json.errcode} ${json.errmsg}`);
    }
    let accessToken = json.access_token;
    this.cache.setCache(`wx-applet-accesstoken-${this.appId}`, accessToken, (json.expires_in) * 1000);
    return accessToken;
}

module.exports = AccessToken;