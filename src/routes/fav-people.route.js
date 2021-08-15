const express = require('express');

const router = express.Router();

const favPeopleController = require('../controller/fav-people.controller');

router.get('/favpeople', favPeopleController.fav_people_details);
router.get('/favpeople/:id', favPeopleController.fav_people_detail);
router.post('/favpeople', favPeopleController.fav_people_create);
router.delete('/favpeople', favPeopleController.fav_people_delete);

module.exports = router;
