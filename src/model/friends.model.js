const mongoose = require('mongoose');

const { Schema } = mongoose;
const FriendsSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  avatar: { type: String, required: false },
});

module.exports = mongoose.model('Friends', FriendsSchema);
