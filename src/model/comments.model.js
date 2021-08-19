const mongoose = require('mongoose');

const { Schema } = mongoose;
const CommentsSchema = new Schema({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  recommendationId: { type: String, required: true },
  createdBy: { type: String, required: true },
  createdAt: { type: Date, required: true },
  comment: { type: String, required: true, max: 300 },
  upVote: { type: Number, default: 0 },
  downVote: { type: Number, default: 0 },
});

module.exports = mongoose.model('Comments', CommentsSchema);
