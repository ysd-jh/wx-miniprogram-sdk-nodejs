const requestUtil = require("./requestUtil");

/**
 * 小程序码
 */
function WxaCode() {
    
}

WxaCode.prototype.createQRCode = async function (accessToken, path, paramsObj) {
    let response = await requestUtil.post(`https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode?access_token=${accessToken}`, {
        path,
        ...paramsObj,
    }),
        buffer = await response.buffer();
    if (buffer) {
        return buffer;
    }
    let jsonData = await response.json();
    console.error(`qrcode error, errorcode:${jsonData.errcode},errmsg:${jsonData.errmsg}`)
    return null;
}

WxaCode.prototype.get = async function (accessToken, path, paramsObj) {
    let response = await requestUtil.post(`https://api.weixin.qq.com/wxa/getwxacode?access_token=${accessToken}`, {
        path,
        ...paramsObj,
    }),
        buffer = await response.buffer();
    if (buffer) {
        return buffer;
    }
    let jsonData = await response.json();
    console.error(`qrcode error, errorcode:${jsonData.errcode},errmsg:${jsonData.errmsg}`)
    return null;
}

WxaCode.prototype.getUnlimited = async function (accessToken, path, scene, paramsObj) {
    let response = await requestUtil.post(`https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=${accessToken}`, {
        path,
        scene,
        ...paramsObj,
    }),
        buffer = await response.buffer();
    if (buffer) {
        return buffer;
    }
    let jsonData = await response.json();
    console.error(`qrcode error, errorcode:${jsonData.errcode},errmsg:${jsonData.errmsg}`)
    return null;
}

module.exports = WxaCode;