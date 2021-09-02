const { v4: uuidv4 } = require('uuid');
const Profile = require('../model/profile.model');

exports.profile_create = async (req, res, next) => {
  const profile = new Profile({
    id: uuidv4(),
    userId: req.body.userId,
    moviesitNickname: req.body.moviesitNickname,
    age: req.body.age,
    about: req.body.about,
    socialMedias: req.body.socialMedias,
  });
  try {
    await profile.save();
    res.send('profile Created');
  } catch (error) {
    next(error);
  }
};

exports.profile_details = async (req, res) => {
  try {
    const profile = await Profile.find({});
    res.status(200).send(profile);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.profile_detail = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.params.id });
    if (!profile) res.status(404).send('No profile found');
    res.status(200).send(profile);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.profile_deposition_from_user = async (req, res) => {
  try {
    const profile = await Profile.find({ userId: req.params.id });
    if (!profile) res.status(404).send('No profile found');
    res.status(200).send(profile);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.profile_update = async (req, res) => {
  try {
    const profile = await Profile.findByIdAndUpdate(
      req.params.id, req.body,
    );
    await profile.save();
    res.status(200).send(profile);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.profile_delete = async (req, res) => {
  try {
    const profile = await Profile.findByIdAndDelete(req.params.id);
    if (!profile) res.status(404).send('No profile found');
    res.status(204).send();
  } catch (error) {
    res.status(401).send(error);
  }
};
