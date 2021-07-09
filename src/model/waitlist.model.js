const mongoose = require('mongoose');

const { Schema } = mongoose;
const WaitListSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true, max: 200 },
  genre: { type: String, required: true },
  initialDate: { type: Date, require: true },
  doDate: { type: Date, require: false },
});

module.exports = mongoose.model('WaitList', WaitListSchema);
