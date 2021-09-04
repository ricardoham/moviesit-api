const express = require('express');
const favPeopleController = require('../controller/fav-people.controller');

const favPeopleRouter = express.Router();

favPeopleRouter.get('', favPeopleController.fav_people_details);
favPeopleRouter.get('/:id', favPeopleController.fav_people_detail);
favPeopleRouter.get('/user/:id', favPeopleController.fav_people_details_from_user);
favPeopleRouter.post('', favPeopleController.fav_people_create);
favPeopleRouter.delete('/:id', favPeopleController.fav_people_delete);

module.exports = favPeopleRouter;
