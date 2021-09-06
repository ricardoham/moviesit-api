const mongoose = require('mongoose');

const { Schema } = mongoose;
const BanCommentsSchema = new Schema({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  userReportName: { type: String, required: true },
  userReportedId: { type: String, require: true },
  commentedItemId: { type: String, required: true },
  commentCreatedBy: { type: String, required: true },
  commentCreatedAt: { type: Date, required: true },
  createdAt: { type: Date, required: true },
  comment: { type: String, required: true },
});

module.exports = mongoose.model('BanComments', BanCommentsSchema);
