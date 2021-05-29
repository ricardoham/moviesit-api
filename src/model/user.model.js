const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let WatchedMoviesSchema = new Schema({
  id: { type: String, required: true},
  name: { type: String, required: true, max: 200 },
  age: { type: Number, required: true },
  email: { type: String, required: true, max: 200 },
});

module.exports = mongoose.model("WatchedMovies", WatchedMoviesSchema);
