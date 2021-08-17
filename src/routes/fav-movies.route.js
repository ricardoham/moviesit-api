const express = require('express');

const router = express.Router();

const favMoviesController = require('../controller/fav-movies.controller');
const { checkJwt } = require('../middlewares/jwt');

router.get('/favmovies', checkJwt, favMoviesController.fav_movies_details);
router.get('/favmovies/:id', favMoviesController.fav_movie_detail);
router.post('/favmovies', favMoviesController.fav_movies_create);
router.delete('/favmovies', favMoviesController.fav_movie_delete);

module.exports = router;
