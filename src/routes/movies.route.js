const express = require("express");
const router = express.Router();

const movies_controller = require("../controller/movies.controller");

router.get("/movies", movies_controller.movies_details);
router.get("/movies/:id", movies_controller.movie_detail);
router.post("/movies", movies_controller.movies_create);
router.delete("/movies", movies_controller.movie_delete)

module.exports = router;
