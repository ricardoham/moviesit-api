const express = require("express");
const router = express.Router();

const MoviesController = require("../controller/movies-controller");

// router.get("/", movies_controller.movies_details);

// router.post("/", movies_controller.movies_create);

// module.exports = router;


module.exports = {
  name: 'movies',
  version: '1.0.0',

  register: async(server) => {
    server.route([
      {
      method: 'GET',
      path: '/movies',
      handler: MoviesController.findMovies,
    },
    {
      method: 'POST',
      path: '/movies',
      handler: MoviesController.createMovie,
    }
  ])
  }
}
