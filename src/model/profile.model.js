const mongoose = require('mongoose');

const { Schema } = mongoose;

const SocialMedias = new Schema({
  _id: false,
  facebook: { type: String },
  instagram: { type: String },
  twitter: { type: String },
  whatsapp: { type: Number },
  tiktok: { type: String },
});

const ProfileSchema = new Schema({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  name: { type: String, required: true },
  picture: { type: String, required: true },
  hasProfile: { type: Boolean, required: true, default: false },
  isAdmin: { type: Boolean, default: false },
  moviesitNickname: { type: String },
  age: { type: Number },
  about: { type: String, max: 500 },
  socialMedias: SocialMedias,
  createdAt: { type: Date, require: true },
});

module.exports = mongoose.model('Profile', ProfileSchema);
