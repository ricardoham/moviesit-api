const mongoose = require('mongoose');

const { Schema } = mongoose;
const MoviesSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true, max: 200 },
  genre: { type: String, required: true },
  synopses: { type: String, required: true, max: 300 },
  imdbScore: { type: Number, required: true },
});

module.exports = mongoose.model('Movies', MoviesSchema);
