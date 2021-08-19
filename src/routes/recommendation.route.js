const express = require('express');
const recommendationsController = require('../controller/recommendations.controller');

const recommendationsRouter = express.Router();

recommendationsRouter.get('/recommendations', recommendationsController.recommendations_details);
recommendationsRouter.post('/recommendations', recommendationsController.recommendations_create);

module.exports = recommendationsRouter;
