const mongoose = require('mongoose');

const { Schema } = mongoose;
const FavPeopleSchema = new Schema({
  id: { type: String, required: true },
  personId: { type: Number, required: true },
  isFavorite: { type: Boolean, require: true },
  name: { type: String, required: true },
  birthDay: { type: String, required: true },
  deathDay: { type: String, required: true },
  placeOfBirth: { type: String, required: true },
  department: { type: String, required: true },
  biography: { type: String, required: true },
  popularity: { type: Number, required: true },
  profilePatch: { type: String, required: true },
});

module.exports = mongoose.model('FavPeople', FavPeopleSchema);
