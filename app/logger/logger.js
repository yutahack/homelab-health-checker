var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

var date = moment().format("YYYY-MM-DDTHH:mm:ss");

const writeLog = async (message) => {
    console.log(moment().format("YYYY-MM-DDTHH:mm:ss") + " " + message);
};

module.exports = {
    writeLog,
};
