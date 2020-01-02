const requestUtil = require('./requestUtil');

/**
 * 统一服务消息
 */
function UniformMessage() {
    
}

UniformMessage.prototype.send = async function (accessToken, touser, appid, templateId, url, miniprogram, data) {
    let response = await requestUtil.post(`https://api.weixin.qq.com/cgi-bin/message/wxopen/template/uniform_send`, {
        access_token: accessToken,
        touser: touser,
        mp_template_msg: {
            appid: appid,
            template_id: templateId,
            url: url,
            miniprogram: miniprogram,
            data: data,
        },
    });
    return response.json();
}

module.exports = UniformMessage;