const express = require('express');

const router = express.Router();

const recommendationsController = require('../controller/recommendations.controller');

router.get('/recommendations', recommendationsController.recommendations_details);
router.post('/recommendations', recommendationsController.recommendations_create);

module.exports = router;
