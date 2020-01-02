const requestUtil = require("./requestUtil");

function SubscribeMessage() {
    
}

SubscribeMessage.prototype.addTemplate = async function (accessToken, tid, kidList, paramsObj = {}) {
    let url = `https://api.weixin.qq.com/wxaapi/newtmpl/addtemplate?access_token=${accessToken}`,
        bodyObj = {
            access_token: accessToken,
            tid,
            kidList,
            ...paramsObj,
        },
        response = await requestUtil.post(url, bodyObj);
    return response.json();
}

SubscribeMessage.prototype.deleteTemplate = async function (accessToken, priTmplId) {
    let url = `https://api.weixin.qq.com/wxaapi/newtmpl/deltemplate?access_token=${accessToken}`,
        bodyObj = {
            access_token: accessToken,
            priTmplId,
        },
        response = await requestUtil.post(url, bodyObj);
    return response.json();
}

SubscribeMessage.prototype.getCategory = async function (accessToken) {
    let url = `https://api.weixin.qq.com/wxaapi/newtmpl/getcategory?access_token=${accessToken}`,
        bodyObj = {
            access_token: accessToken,
            media,
        },
        response = await requestUtil.post(url, bodyObj);
    return response.json();
}

SubscribeMessage.prototype.getPubTemplateKeyWordsById = async function (accessToken, tid) {
    let url = `https://api.weixin.qq.com/wxaapi/newtmpl/getpubtemplatekeywords?access_token=${accessToken}`,
        bodyObj = {
            access_token: accessToken,
            tid,
        },
        response = await requestUtil.post(url, bodyObj);
    return response.json();
}

SubscribeMessage.prototype.getPubTemplateTitleList = async function (accessToken, ids, start, limit) {
    let url = `https://api.weixin.qq.com/wxaapi/newtmpl/getpubtemplatetitles?access_token=${accessToken}`,
        bodyObj = {
            access_token: accessToken,
            ids,
            start,
            limit,
        },
        response = await requestUtil.post(url, bodyObj);
    return response.json();
}

SubscribeMessage.prototype.getTemplateList = async function (accessToken) {
    let url = `https://api.weixin.qq.com/wxaapi/newtmpl/gettemplate?access_token=${accessToken}`,
        bodyObj = {
            access_token: accessToken,
        },
        response = await requestUtil.post(url, bodyObj);
    return response.json();
}

/**
 * @param page can be null
 */
SubscribeMessage.prototype.send = async function (accessToken, touser, template_id, data, page) {
    let url = `https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=${accessToken}`,
        bodyObj = {
            access_token: accessToken,
            touser,
            template_id,
            data,
            ...page ? { page } : {},
        },
        response = await requestUtil.post(url, bodyObj);
    return response.json();
}

module.exports = SubscribeMessage;