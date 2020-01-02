const requestUtil = require("./requestUtil");

function Security() {
    
}

Security.prototype.imgSecCheck = async function (accessToken, media) {
    let url = `https://api.weixin.qq.com/wxa/img_sec_check?access_token=${accessToken}`,
        bodyObj = {
            access_token: accessToken,
            media,
        },
        response = await requestUtil.post(url, bodyObj);
    return response.json();
}

/**
 * @param mediaType 1音频 2图片
 */
Security.prototype.mediaCheckAsync = async function (accessToken, mediaUrl, mediaType) {
    let url = `https://api.weixin.qq.com/wxa/media_check_async?access_token=${accessToken}`,
        bodyObj = {
            access_token: accessToken,
            media_url: mediaUrl,
            media_type: mediaType,
        },
        response = await requestUtil.post(url, bodyObj);
    return response.json();
}

Security.prototype.msgSecCheck = async function (accessToken, content) {
    let url = `https://api.weixin.qq.com/wxa/msg_sec_check?access_token=${accessToken}`,
        bodyObj = {
            access_token: accessToken,
            content: content,
        },
        response = await requestUtil.post(url, bodyObj);
    return response.json();
}

module.exports = Security;