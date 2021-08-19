const express = require('express');
const commentsController = require('../controller/comments.controller');

const commentsRouter = express.Router();

commentsRouter.get('', commentsController.comments_details);
commentsRouter.post('', commentsController.comments_create);

module.exports = commentsRouter;
