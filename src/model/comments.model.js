const mongoose = require('mongoose');

const { Schema } = mongoose;
const CommentsSchema = new Schema({
  id: { type: String, required: true },
  movieId: { type: String, required: true },
  commentTitle: { type: String, required: true },
  comment: { type: String, required: true },
  upVote: { type: Number, default: 0 },
  downVote: { type: Number, default: 0 },
});

module.exports = mongoose.model('Comments', CommentsSchema);
