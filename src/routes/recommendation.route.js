const express = require('express');
const recommendationsController = require('../controller/recommendations.controller');

const recommendationsRouter = express.Router();

recommendationsRouter.get('', recommendationsController.recommendations_details);
recommendationsRouter.get('/:id', recommendationsController.recommendations_details);
recommendationsRouter.get('/user/:id', recommendationsController.recommendations_details_from_user);
recommendationsRouter.post('', recommendationsController.recommendations_create);
recommendationsRouter.put('', recommendationsController.recommendation_update);
recommendationsRouter.delete('', recommendationsController.recommendation_delete);

module.exports = recommendationsRouter;
