const requestUtil = require("./requestUtil");

/**
 * 登录
 */
function Auth() {
    
}

Auth.prototype.code2Session = async function (appId, secret, code) {
    let response = await requestUtil.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${secret}&js_code=${code}&grant_type=authorization_code`);
    return response.json();
}

module.exports = Auth;