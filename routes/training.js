const router = require("express").Router();
const constants = require("../utils/constants");
const TrainingController = require("../controllers/trainings.js")
const logger = require("../utils/logUtils");

router.get("/listTrainings", (req, res) => {
    TrainingController.listAllTrainings(req, res);
})

router.post("/createTrainings", (req, res) => {
    TrainingController.createTraining(req, res);
})

module.exports = router;