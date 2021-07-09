const express = require('express');

const router = express.Router();

const commentsController = require('../controller/comments.controller');

router.get('/comments', commentsController.comments_details);
router.post('/comments', commentsController.comments_create);

module.exports = router;
