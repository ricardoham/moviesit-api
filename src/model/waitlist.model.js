const mongoose = require('mongoose');

const { Schema } = mongoose;

const MoviesSchema = new Schema({
  movieId: { type: Number, required: true },
  title: { type: String, required: true },
});

const WaitListSchema = new Schema({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  title: { type: String, required: true },
  comment: { type: String, require: true },
  dueDate: { type: Date, require: true },
  movie: MoviesSchema,
  createdAt: { type: Date, required: true },
});

module.exports = mongoose.model('WaitList', WaitListSchema);
