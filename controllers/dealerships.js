const Dealerships = require("../models/dealership");
const constants = require("../utils/constants");
const sequelize = require("sequelize");
const logger = require("../utils/logUtils");

exports.createDealerships = async (req, res) => {
    try {
        const name = req.body.name;
        const dealership = await Dealerships.create({
            name: name,
        })
        if (dealership) {
            res.json({
                statusCode: constants.successStatusCode,
                status: constants.successStatus,
                msg: "Dealership created."
            })
        } else {
            res.json({
                statusCode: constants.successStatusCode,
                status: constants.errorStatus,
                msg: "Dealership creation failed."
            })
        }
        
    } catch (err) {
        logger.error(err);
        res.json({
            statusCode: constants.successStatusCode,
            status: constants.errorStatus,
            msg: "Dealership creation failed."
        })
    }
};