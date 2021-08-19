const express = require('express');
const favPeopleController = require('../controller/fav-people.controller');

const favPeopleRouter = express.Router();

favPeopleRouter.get('', favPeopleController.fav_people_details);
favPeopleRouter.get('/:id', favPeopleController.fav_people_detail);
favPeopleRouter.post('', favPeopleController.fav_people_create);
favPeopleRouter.delete('', favPeopleController.fav_people_delete);

module.exports = favPeopleRouter;
