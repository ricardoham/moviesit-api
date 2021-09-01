const express = require('express');
const commentsController = require('../controller/comments.controller');

const commentsRouter = express.Router();

commentsRouter.get('', commentsController.comments_details);
commentsRouter.get('/:id', commentsController.comment_detail);
commentsRouter.get('/recommendation/:id', commentsController.comments_details_from_recommendation);
commentsRouter.get('/user/:id', commentsController.comments_details_from_user);
commentsRouter.post('', commentsController.comments_create);
commentsRouter.put('/:id', commentsController.comment_update);
commentsRouter.delete('/:id', commentsController.comment_delete);

module.exports = commentsRouter;
