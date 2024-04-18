const router = require("express").Router();
const constants = require("../utils/constants");
const logger = require("../utils/logUtils");

router.get("/status", (req, res) => {
    res.json({
        statuscode:  constants.successStatusCode,
        status:  constants.successStatus,
        msg: "API is running."
    })
})

module.exports = router;