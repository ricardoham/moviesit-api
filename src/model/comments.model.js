const mongoose = require('mongoose');

const { Schema } = mongoose;
const CommentsSchema = new Schema({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  commentedItemId: { type: String, required: true },
  createdBy: { type: String, required: true },
  createdAt: { type: Date, required: true },
  comment: { type: String, required: true, max: 500 },
});

module.exports = mongoose.model('Comments', CommentsSchema);
