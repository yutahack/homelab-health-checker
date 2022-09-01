const ping = require("ping");
const hosts = require("../ping-hosts.json");
const logger = require("../logger/logger");

const run = async () => {
    var resultObj = [];
    for (let host of hosts) {
        let res = await ping.promise.probe(host.host);
        // console.log(res);
        logger.writeLog("NAME: " + host.name + ", HOST: " + res.host + " , LATENCY: " + res.time + " ms");
        resultObj.push({
            name: host.name,
            host: res.host,
            latency: res.time,
        });
    }

    return resultObj;
};

module.exports = { run };
