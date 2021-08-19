const express = require('express');
const friendsController = require('../controller/friends.controller');

const friendsRouter = express.Router();

friendsRouter.post('/friends', friendsController.friends_create);

module.exports = friendsRouter;
