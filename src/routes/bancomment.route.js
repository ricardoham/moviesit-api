const express = require('express');
const banCommentsController = require('../controller/bancomment.controller');

const banCommentsRouter = express.Router();

banCommentsRouter.get('', banCommentsController.ban_comments_details);
banCommentsRouter.get('/:id', banCommentsController.ban_comment_detail);
banCommentsRouter.post('', banCommentsController.ban_comments_create);
banCommentsRouter.put('/:id', banCommentsController.ban_comment_update);
banCommentsRouter.delete('/:id', banCommentsController.ban_comment_delete);

module.exports = banCommentsRouter;
