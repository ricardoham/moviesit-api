const express = require("express");
const router = express.Router();

const waitList_controller = require("../controller/waitlist.controller");

router.get("/waitlist", waitList_controller.waitList_details);
router.post("/waitlist", waitList_controller.waitList_create);

module.exports = router;
