const Recommendations = require('../model/recommendations.model');
const Profile = require('../model/profile.model');

exports.generate_report = async (req, res) => {
  const recommendations = await Recommendations.find({});
  const profile = await Profile.find({});
};
