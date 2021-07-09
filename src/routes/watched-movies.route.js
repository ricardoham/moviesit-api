const express = require('express');

const router = express.Router();

const watchedMoviesController = require('../controller/watched-movies.controller');

router.get('/watchedmovies', watchedMoviesController.watchedMovies_details);
router.post('/watchedmovies', watchedMoviesController.watchedMovies_create);

module.exports = router;
