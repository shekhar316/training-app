const router = require("express").Router();
const DealershipsController = require("../controllers/dealerships")

router.post("/create", (req, res) => {
    DealershipsController.createDealerships(req, res);
})

module.exports = router;