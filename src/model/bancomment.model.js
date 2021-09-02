const mongoose = require('mongoose');

const { Schema } = mongoose;
const BanCommentsSchema = new Schema({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  commentUserId: { type: String, required: true },
  commentId: { type: String, required: true },
  recommendationId: { type: String, required: true },
  createdBy: { type: String, required: true },
  createdAt: { type: Date, required: true },
  comment: { type: String, required: true },
});

module.exports = mongoose.model('BanComments', BanCommentsSchema);
