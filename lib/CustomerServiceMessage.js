const requestUtil = require("./requestUtil");

/**
 * 客服消息
 */
function CustomerServiceMessage() {
    
}

CustomerServiceMessage.prototype.getTempMedia = async function (accessToken, mediaId) {
    let response = await requestUtil.get(`https://api.weixin.qq.com/cgi-bin/media/get?access_token=${accessToken}N&media_id=${mediaId}`),
        buffer = await response.buffer();
    if (buffer) {
        return buffer;
    }
    let jsonData = await response.json();
    console.error(`qrcode error, errorcode:${jsonData.errcode},errmsg:${jsonData.errmsg}`)
    return null;
}

CustomerServiceMessage.prototype.send_text = async function (accessToken, touser, content) {
    let response = await requestUtil.post(`https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${accessToken}`, {
        access_token: accessToken,
        touser,
        msgtype: 'text',
        text: {
            content: content
        },
    });
    return response.json();
}

CustomerServiceMessage.prototype.send_image = async function (accessToken, touser, mediaId) {
    let response = await requestUtil.post(`https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${accessToken}`, {
        access_token: accessToken,
        touser,
        msgtype: 'image',
        image: {
            media_id: mediaId,
        },
    });
    return response.json();
}

CustomerServiceMessage.prototype.send_link = async function (accessToken, touser, title, description, url, thumbUrl) {
    let response = await requestUtil.post(`https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${accessToken}`, {
        access_token: accessToken,
        touser,
        msgtype: 'link',
        link: {
            title: title,
            description: description,
            url: url,
            thumb_url: thumbUrl,
        },
    });
    return response.json();
}

CustomerServiceMessage.prototype.send_miniprogrampage = async function (accessToken, touser, title, pagePath, thumbMediaId) {
    let response = await requestUtil.post(`https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${accessToken}`, {
        access_token: accessToken,
        touser,
        msgtype: 'miniprogrampage',
        miniprogrampage: {
            title: title,
            pagePath: pagePath,
            thumb_media_id: thumbMediaId,
        },
    });
    return response.json();
}

/**
 * @param command one of ['Typing','CancelTyping']
 */
CustomerServiceMessage.prototype.setTyping = async function (accessToken, touser, command) {
    let response = await requestUtil.post(`https://api.weixin.qq.com/cgi-bin/message/custom/typing?access_token=${accessToken}`, {
        access_token: accessToken,
        touser,
        command,
    });
    return response.json();
}

CustomerServiceMessage.prototype.uploadTempMedia = async function (accessToken, media) {
    let response = await requestUtil.post(`https://api.weixin.qq.com/cgi-bin/media/upload`, {
        access_token: accessToken,
        type: 'image',
        media,
    });
    return response.json();
}

module.exports = CustomerServiceMessage;