const fetch = require("node-fetch");

function RequestUtil() {
    
}

RequestUtil.prototype.post = async function (url, bodyObj = {}) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(bodyObj),
    });
}

RequestUtil.prototype.get = async function (url) {
    return fetch(url, {
        method: 'GET',
    });
}

module.exports = new RequestUtil();