const app = require("express")();
const tasker = require("./tasker/tasker");
const logger = require("./logger/logger");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });

const port = process.env.PORT;
const key = process.env.X_API_KEY;
app.use(cors());
tasker.startScheduler();

app.post("/ping", (req, res) => {
    if (key !== req.headers["x-api-key"]) {
        res.send("Invalid API Key");
        return;
    }
    var ping = tasker.getPingToHostResult();
    res.send(ping);
});

app.listen(port, () => logger.writeLog("Server runnning at localhost:" + port));
