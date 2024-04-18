const winston = require("winston");

const logger = winston.createLogger({
    level: process.env.LOGGINGLEVEL,
    format: winston.format.combine(winston.format.timestamp(), winston.format.cli()),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: `${process.env.LOGFILE}`
        })
    ]
})

module.exports = logger;