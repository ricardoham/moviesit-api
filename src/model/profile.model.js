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
  moviesitNickname: { type: String },
  age: { type: Number },
  about: { type: String, max: 500 },
  socialMedias: SocialMedias,
});

module.exports = mongoose.model('Profile', ProfileSchema);
