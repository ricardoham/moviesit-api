const express = require('express');
const clientController = require('../controller/client.controller');

const clientRouter = express.Router();

clientRouter.get('/tmdb', clientController.tmdb_movies);
clientRouter.get('/tmdb/:id', clientController.tmdb_movie_details);
clientRouter.get('/tmdbpeople', clientController.tmdb_people);
clientRouter.get('/tmdbperson/:id', clientController.tmdb_person_details);

module.exports = clientRouter;
