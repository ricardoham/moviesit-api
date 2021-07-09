const express = require('express');

const router = express.Router();

const moviesController = require('../controller/movies.controller');

router.get('/movies', moviesController.movies_details);
router.get('/movies/:id', moviesController.movie_detail);
router.post('/movies', moviesController.movies_create);
router.delete('/movies', moviesController.movie_delete);

module.exports = router;
