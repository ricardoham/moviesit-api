const mongoose = require('mongoose');

const { Schema } = mongoose;

const ReportSchema = new Schema({
  recommendationQtd: { type: String, required: true },
  profilesQtd: { type: String },
  age: { type: Number },
  about: { type: String, max: 500 },
});

module.exports = mongoose.model('Report', ReportSchema);
