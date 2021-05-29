const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let WatchedMoviesSchema = new Schema({
  id: { type: String, required: true},
  name: { type: String, required: true, max: 200 },
  genre: { type: String, required: true },
});

module.exports = mongoose.model("WatchedMovies", WatchedMoviesSchema);
