const mongoose = require('mongoose');

const { Schema } = mongoose;

const Deposition = new Schema({
  id: { type: String },
  depositionUserId: { type: String, required: true },
  profileId: { type: String, require: true },
  createdBy: { type: String, required: true },
  talk: { type: String, required: true },
});

module.exports = mongoose.model('Deposition', Deposition);
