const mongoose = require('mongoose');

const { Schema } = mongoose;

const Deposition = new Schema({
  id: { type: String },
  userId: { type: String, required: true },
  commentedItemId: { type: String, require: true },
  createdBy: { type: String, required: true },
  createdAt: { type: Date, required: true },
  comment: { type: String, required: true },
});

module.exports = mongoose.model('Deposition', Deposition);
