const express = require('express');

const router = express.Router();

const clientController = require('../controller/client.controller');

router.get('/tmdb', clientController.tmdb_movies);
router.get('/tmdb/:id', clientController.tmdb_movie_details);
router.get('/tmdbpeople', clientController.tmdb_people);
router.get('/tmdbperson/:id', clientController.tmdb_person_details);

module.exports = router;
