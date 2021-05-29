const express = require("express");
const router = express.Router();

const watchedMovies_controller = require("../controller/watched-movies.controller");

router.get("/watchedmovies", watchedMovies_controller.watchedMovies_details);
router.post("/watchedmovies", watchedMovies_controller.watchedMovies_create);

module.exports = router;
