const express = require("express");
const router = express.Router();

const movies_controller = require("../controller/movies.controller");

router.get("/", movies_controller.movies_details);

router.post("/", movies_controller.movies_create);

module.exports = router;
