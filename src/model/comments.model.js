const mongoose = require('mongoose');

const Schema = mongoose.Schema;
let CommentsSchema = new Schema({
  id: { type: String, required: true },
  movieId: { type: String, required: true },
  commentTitle: { type: String, required: true },
  comment: { type: String, required: true },
  upVote: { type: Number },
  downVote : { type: Number },
});

module.exports = mongoose.model("Comments", CommentsSchema);
