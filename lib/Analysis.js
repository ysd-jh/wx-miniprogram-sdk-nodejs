
const requestUtil = require('./requestUtil');

/**
 * 数据分析
 */
function Analysis() {

}

Analysis.prototype.getDailyRetain = async function (accessToken, beginDateStr, endDateStr) {
    let response = await requestUtil.post(`https://api.weixin.qq.com/datacube/getweanalysisappiddailyretaininfo?access_token=${accessToken}`, {
        access_token: accessToken,
        begin_date: beginDateStr,
        end_date: endDateStr,
    });
    return response.json();
}

Analysis.prototype.getMonthlyRetain = async function (accessToken, beginDateStr, endDateStr) {
    let response = await requestUtil.post(`https://api.weixin.qq.com/datacube/getweanalysisappidmonthlyretaininfo?access_token=${accessToken}`, {
        access_token: accessToken,
        begin_date: beginDateStr,
        end_date: endDateStr,
    });
    return response.json();
}

Analysis.prototype.getWeeklyRetain = async function (accessToken, beginDateStr, endDateStr) {
    let response = await requestUtil.post(`https://api.weixin.qq.com/datacube/getweanalysisappidweeklyretaininfo?access_token=${accessToken}`, {
        access_token: accessToken,
        begin_date: beginDateStr,
        end_date: endDateStr,
    });
    return response.json();
}

Analysis.prototype.getDailySummary = async function (accessToken, beginDateStr, endDateStr) {
    let response = await requestUtil.post(`https://api.weixin.qq.com/datacube/getweanalysisappiddailysummarytrend?access_token=${accessToken}`, {
        access_token: accessToken,
        begin_date: beginDateStr,
        end_date: endDateStr,
    });
    return response.json();
}

Analysis.prototype.getDailyVisitTrend = async function (accessToken, beginDateStr, endDateStr) {
    let response = await requestUtil.post(`https://api.weixin.qq.com/datacube/getweanalysisappiddailyvisittrend?access_token=${accessToken}`, {
        access_token: accessToken,
        begin_date: beginDateStr,
        end_date: endDateStr,
    });
    return response.json();
}

Analysis.prototype.getMonthlyVisitTrend = async function (accessToken, beginDateStr, endDateStr) {
    let response = await requestUtil.post(`https://api.weixin.qq.com/datacube/getweanalysisappidmonthlyvisittrend?access_token=${accessToken}`, {
        access_token: accessToken,
        begin_date: beginDateStr,
        end_date: endDateStr,
    });
    return response.json();
}

Analysis.prototype.getWeeklyVisitTrend = async function (accessToken, beginDateStr, endDateStr) {
    let response = await requestUtil.post(`https://api.weixin.qq.com/datacube/getweanalysisappidweeklyvisittrend?access_token=${accessToken}`, {
        access_token: accessToken,
        begin_date: beginDateStr,
        end_date: endDateStr,
    });
    return response.json();
}

Analysis.prototype.getUserPortrait = async function (accessToken, beginDateStr, endDateStr) {
    let response = await requestUtil.post(`https://api.weixin.qq.com/datacube/getweanalysisappiduserportrait?access_token=${accessToken}`, {
        access_token: accessToken,
        begin_date: beginDateStr,
        end_date: endDateStr,
    });
    return response.json();
}

Analysis.prototype.getVisitDistribution = async function (accessToken, beginDateStr, endDateStr) {
    let response = await requestUtil.post(`https://api.weixin.qq.com/datacube/getweanalysisappidvisitdistribution?access_token=${accessToken}`, {
        access_token: accessToken,
        begin_date: beginDateStr,
        end_date: endDateStr,
    });
    return response.json();
}

Analysis.prototype.getVisitPage = async function (accessToken, beginDateStr, endDateStr) {
    let response = await requestUtil.post(`https://api.weixin.qq.com/datacube/getweanalysisappidvisitpage?access_token=${accessToken}`, {
        access_token: accessToken,
        begin_date: beginDateStr,
        end_date: endDateStr,
    });
    return response.json();
}

module.exports = Analysis;