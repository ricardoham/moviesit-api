const express = require('express');
const favMoviesController = require('../controller/fav-movies.controller');
const { checkJwt } = require('../middlewares/jwt');

const favMovieRouter = express.Router();

favMovieRouter.get('', favMoviesController.fav_movies_details);
favMovieRouter.get('/:id', favMoviesController.fav_movie_detail);
favMovieRouter.get('/user/:id', favMoviesController.fav_movie_details_from_user);
favMovieRouter.post('', favMoviesController.fav_movies_create);
favMovieRouter.delete('/:id', favMoviesController.fav_movie_delete);

module.exports = favMovieRouter;
