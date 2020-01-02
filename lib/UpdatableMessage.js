const requestUtil = require('./requestUtil');

/**
 * 动态消息
 */
function UpdatableMessage() {
    
}

UpdatableMessage.prototype.createActivityId = async function (accessToken) {
    let response = await requestUtil.get(`https://api.weixin.qq.com/cgi-bin/message/wxopen/activityid/create?access_token=${accessToken}`);
    return response.json();
}

UpdatableMessage.prototype.setUpdatableMsg = async function (accessToken, activityId, targetState, templateInfo) {
    let response = await requestUtil.post(`https://api.weixin.qq.com/cgi-bin/message/wxopen/updatablemsg/send`, {
        access_token: accessToken,
        activity_id: activityId,
        target_state: targetState,
        template_info: templateInfo,
    });
    return response.json();
}

module.exports = UpdatableMessage;