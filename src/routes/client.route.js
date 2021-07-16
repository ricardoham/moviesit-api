const express = require('express');

const router = express.Router();

const clientController = require('../controller/client.controller');

router.get('/tmdb', clientController.tmdb_movies);
router.get('/tmdb/:id', clientController.tmdb_movie_details);

module.exports = router;
