const router = require("express").Router();
const TrainerController = require("../controllers/trainer")


router.post("/create", (req, res) => {
    TrainerController.createTrainer(req, res);
})

module.exports = router;