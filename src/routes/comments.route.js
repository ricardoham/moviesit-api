const express = require("express");
const router = express.Router();

const comments_controller = require("../controller/comments.controller");

router.get("/comments", comments_controller.comments_details);
router.post("/comments", comments_controller.comments_create);

module.exports = router;
