const mongoose = require('mongoose');
const Deposition = require('./deposition.model');

const { Schema } = mongoose;

const SocialMedias = new Schema({
  facebook: { type: String },
  instagram: { type: String },
  twitter: { type: String },
  whatsapp: { type: Number },
  tiktok: { type: String },
});

const ProfileSchema = new Schema({
  id: { type: String, required: true },
  userId: { type: String, required: true },
  nickname: { type: String },
  age: { type: Number },
  about: { type: String, max: 500 },
  socialMedias: SocialMedias,
  deposition: [Deposition],
});

module.exports = mongoose.model('Profile', ProfileSchema);
