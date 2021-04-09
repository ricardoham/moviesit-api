const express = require("express");
const router = express.Router();

const client_controller = require("../controller/client.controller");

router.get("/", client_controller.tmdb_movies);

module.exports = router;
