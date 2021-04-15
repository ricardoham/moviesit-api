const mongoose = require('mongoose');

const Schema = mongoose.Schema;
let TMDBSchema = new Schema({
  id: { type: Number, required: true},
  title: { type: String, required: true},
  genre: [{ id: Number, name: String }],
  overview: { type: String, required: true},
  popularity: { type: Number, required: true},
  voteAverage: { type: Number, required: true}
})

module.exports = mongoose.model("TMDB", TMDBSchema);
