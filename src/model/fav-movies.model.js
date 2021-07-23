const mongoose = require('mongoose');

const { Schema } = mongoose;
const FavMoviesSchema = new Schema({
  id: { type: String, required: true },
  isFavorite: { type: Boolean, require: true },
  movieId: { type: String, required: true },
  title: { type: String, required: true },
  genres: { type: Array, required: true },
  overview: { type: String, required: true },
  popularity: { type: Number, required: true },
  voteAverage: { type: Number, required: true },
  releaseDate: { type: String, required: true },
  posterPath: { type: String, required: true },
  budget: { type: Number, required: true },
  runtime: { type: Number, required: true },
  revenue: { type: Number, required: true },
});

module.exports = mongoose.model('FavMovies', FavMoviesSchema);
