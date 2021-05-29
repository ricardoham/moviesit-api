const express = require("express");
const router = express.Router();

const recommendations_controller = require("../controller/recommendations.controller");

router.get("/recommendations", recommendations_controller.recommendations_details);
router.post("/recommendations", recommendations_controller.recommendations_create);

module.exports = router;
