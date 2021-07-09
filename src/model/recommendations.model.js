const mongoose = require('mongoose');

const { Schema } = mongoose;
const RecommendationsSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true, max: 200 },
  genre: { type: String, required: true },
  comment: { type: String, require: false },
});

module.exports = mongoose.model('Recommendations', RecommendationsSchema);
