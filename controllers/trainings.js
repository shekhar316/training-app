const winston = require("winston");
const Trainings = require("../models/trainings");
const Trainer = require("../models/trainers");
const logger = require("../utils/logUtils");
const constants = require("../utils/constants");
const sequelize = require("sequelize");
const Attendance = require("../models/attendance");

exports.listAllTrainings = async (req, res) => {
    try {
        const trainerId = req.headers.trainerid;
        logger.debug(`Trainer ID from API request header: ${trainerId}`);

        if (trainerId == null) {
            logger.error("Unable to get Trainer ID.")
            res.json({
                statusCode: constants.successStatusCode,
                status: constants.errorStatus,
                msg: "Unable to get Trainer ID."
            })
        }
        const trainer = await Trainer.findOne({
            where: {
                mobile_number: trainerId
            }
        })
        if (trainer == null) {
            logger.error("Invalid Trainer ID passed.")
            res.json({
                statusCode: constants.successStatusCode,
                status: constants.errorStatus,
                msg: "Invalid Trainer ID."
            })
        }

        logger.info("Listing all trainings.")
        const foundTrainings = await Trainings.findAll({
            where: {
                rptTrainerId: trainer.id
            }
        });
        if (foundTrainings != null) {
            res.json({
                statusCode: constants.successStatusCode,
                status: constants.errorStatus,
                msg: "Found Trainings.",
                trainingsFound: foundTrainings
            })
        } else {
            res.json({
                statusCode: constants.successStatusCode,
                status: constants.errorStatus,
                msg: "No Trainings Found.",
                trainingsFound: null
            })
        }
    } catch (err) {

    }
};

exports.createTraining = async (req, res) => {
    try {
        const title = req.body.title;
        const dealershipId = req.body.dealershipId;
        const campaignsId = req.body.campaignsId;
        const topicId = req.body.topicId;
        const trainingDate = req.body.trainingDate;
        const status = req.body.status;
        const empIds = req.body.empIds;

        const trainerId = req.headers.trainerid;
        if (trainerId == null) {
            logger.error("Unable to get Trainer ID.")
            res.json({
                statusCode: constants.successStatusCode,
                status: constants.errorStatus,
                msg: "Unable to get Trainer ID."
            })
        }
        const trainer = await Trainer.findOne({
            where: {
                mobile_number: trainerId
            }
        })
        if (trainer == null) {
            logger.error("Invalid Trainer ID passed.")
            res.json({
                statusCode: constants.successStatusCode,
                status: constants.errorStatus,
                msg: "Invalid Trainer ID."
            })
        }
        const createdTraining = await Trainings.create({
            title: title,
            traning_date: new Date(trainingDate).toISOString().split('T')[0],
            status: status,
            rptCampaignId: campaignsId,
            rptDealershipId: dealershipId,
            rptTrainerId: trainer.id,
            rptTopicId: topicId
        })

        const emp = empIds.split(",");
        const tid = createdTraining.id;
        let st = 0;
        if (status != "Draft") {
            st = 1
        }
        console.log(emp)

        for (const e in emp) {
            console.log(emp[e]);
            await createAttendance(emp[e], tid, st);
        }
        if (createdTraining) {
            res.json({
                statusCode: constants.successStatusCode,
                status: constants.successStatus,
                msg: "Training created."
            })
        } else {
            res.json({
                statusCode: constants.successStatusCode,
                status: constants.errorStatus,
                msg: "Not created."
            })
        }

    } catch (err) {
        res.json({
            statusCode: constants.successStatusCode,
            status: constants.errorStatus,
            msg: "Failed" + err
        })
    }
};

async function createAttendance(emp, training, status) {
    try {
        logger.debug("emp is: " + emp);
        const at = await Attendance.create({
            rptTrainingId: training,
            rptEmployeeId: emp,
            rpt_present: status
        })
    } catch (err) {
        logger.error(err);
    }
}