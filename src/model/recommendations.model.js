const mongoose = require('mongoose');

const { Schema } = mongoose;

const MoviesSchema = new Schema({
  movieId: { type: Number, required: true },
  title: { type: String, required: true },
  genres: { type: Array, required: true },
});

const RecommendationsSchema = new Schema({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  createdBy: { type: String, required: true },
  createdAt: { type: Date, required: true },
  title: { type: String, required: true, max: 200 },
  description: { type: String, required: true, max: 300 },
  movies: [MoviesSchema],
  upVote: { type: Number },
});

module.exports = mongoose.model('Recommendations', RecommendationsSchema);
