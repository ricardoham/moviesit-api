const express = require("express");
const router = express.Router();

const friend_controller = require("../controller/friends.controller");

router.post("/friends", friend_controller.friends_create);

module.exports = router;
