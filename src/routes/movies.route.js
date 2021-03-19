const express = require("express");
const router = express.Router();

const movies_controller = require("../controller/movies.controller");

router.get("/movies", movies_controller.movies);

module.exports = router;
