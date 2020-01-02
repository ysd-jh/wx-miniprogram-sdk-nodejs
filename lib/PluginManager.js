const requestUtil = require("./requestUtil");

/**
 * 插件管理
 */
function PluginManager() {
    
}

PluginManager.prototype.applyPlugin = async function (accessToken, pluginAppid) {
    let url = `https://api.weixin.qq.com/wxa/plugin?access_token=${accessToken}`,
        bodyObj = {
            access_token: accessToken,
            action: 'apply',
            plugin_appid: pluginAppid,
        },
        response = await requestUtil.post(url, bodyObj);
    return response.json();
}

PluginManager.prototype.getPluginDevApplyList = async function (accessToken, page, num) {
    let url = `https://api.weixin.qq.com/wxa/devplugin?access_token=${accessToken}`,
        bodyObj = {
            access_token: accessToken,
            action: 'dev_apply_list',
            page,
            num,
        },
        response = await requestUtil.post(url, bodyObj);
    return response.json();
}

PluginManager.prototype.getPluginList = async function (accessToken) {
    let url = `https://api.weixin.qq.com/wxa/plugin?access_token=${accessToken}`,
        bodyObj = {
            access_token: accessToken,
            action: 'list',
        },
        response = await requestUtil.post(url, bodyObj);
    return response.json();
}

/**
 * @param action : one of ['dev_agree', 'dev_refuse', 'dev_delete']
 */
PluginManager.prototype.setDevPluginApplyStatus = async function (accessToken, action, appid, reason) {
    let url = `https://api.weixin.qq.com/wxa/devplugin?access_token=${accessToken}`,
        bodyObj = {
            access_token: accessToken,
            action,
        };
    if (action == 'dev_agree') {
        bodyObj.appid = appid;
    } else if (action == 'dev_refuse') {
        bodyObj.reason = reason;
    }
    let response = await requestUtil.post(url, bodyObj);
    return response.json();
}

PluginManager.prototype.unbindPlugin = async function (accessToken, pluginAppid) {
    let url = `https://api.weixin.qq.com/wxa/plugin?access_token=${accessToken}`,
        bodyObj = {
            access_token: accessToken,
            action: 'unbind',
            plugin_appid: pluginAppid,
        },
        response = await requestUtil.post(url, bodyObj);
    return response.json();
}

module.exports = PluginManager;