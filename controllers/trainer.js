const Trainer = require("../models/trainers");
const constants = require("../utils/constants");
const sequelize = require("sequelize");
const logger = require("../utils/logUtils");

exports.createTrainer = async (req, res) => {
    try {
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;
        const mobile_number = req.body.mobile_number;
        const trainer = await Trainer.create({
            first_name: first_name,
            last_name: last_name,
            mobile_number: mobile_number
        })
        if (trainer) {
            res.json({
                statusCode: constants.successStatusCode,
                status: constants.successStatus,
                msg: "Trainer created."
            })
        } else {
            res.json({
                statusCode: constants.successStatusCode,
                status: constants.errorStatus,
                msg: "Trainer creation failed."
            })
        }
        
    } catch (err) {
        logger.error(err);
        res.json({
            statusCode: constants.successStatusCode,
            status: constants.errorStatus,
            msg: "Trainer creation failed."
        })
    }
};