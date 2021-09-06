const express = require('express');
const usersController = require('../controller/users.controller');

const usersRouter = express.Router();

usersRouter.get('/:id', usersController.user_details);

module.exports = usersRouter;
