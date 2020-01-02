const requestUtil = require("./requestUtil");
/**
 * 用户信息
 */
function UserInfo() {

}

UserInfo.prototype.getPaidUnionId = async function (accessToken, openid) {
    let response = await requestUtil.get(`https://api.weixin.qq.com/wxa/getpaidunionid?access_token=${accessToken}&openid=${openid}`);
    return response.json();
}

module.exports = UserInfo;