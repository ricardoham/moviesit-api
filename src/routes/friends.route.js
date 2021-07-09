const express = require('express');

const router = express.Router();

const friendController = require('../controller/friends.controller');

router.post('/friends', friendController.friends_create);

module.exports = router;
