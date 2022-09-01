const cron = require("node-cron");
const ping = require("../ping/ping");
const logger = require("../logger/logger");

// 공통 데이터
var pingToHostResultData = "";
const getPingToHostResult = () => {
    return pingToHostResultData;
};

//
// [ TASK_001 ]
// 매 분마다 호스트에게 ping을 날리는 작업
//
var task_001 = cron.schedule(
    "*/5 * * * * *",
    async () => {
        logger.writeLog("TASK_001 Elapsed time");
        var res = await ping.run();
        pingToHostResultData = res;
    },
    {
        scheduled: false,
    }
);

const startScheduler = async () => {
    task_001.start();
};

module.exports = { startScheduler, getPingToHostResult };
