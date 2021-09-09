const { v4: uuidv4 } = require('uuid');
const Recommendations = require('../model/recommendations.model');

exports.recommendations_create = async (req, res) => {
  const recommendation = new Recommendations({
    id: uuidv4(),
    userId: req.body.userId,
    createdBy: req.body.createdBy,
    createdAt: Date.now(),
    title: req.body.title,
    description: req.body.description,
    movies: req.body.movies,
  });

  try {
    await recommendation.save();
    res.status(200);
    res.send('Recommendation Created');
  } catch (error) {
    console.error(error);
    res.status(401);
    res.send('Error occurred during request');
  }
};

exports.recommendations_details = async (req, res) => {
  try {
    const recommendations = await Recommendations.find({});
    res.status(200).send(recommendations);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.recommendations_details_from_title = async (req, res) => {
  try {
    const recommendations = await Recommendations.find({});
    res.status(200).send(recommendations);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.recommendation_detail = async (req, res) => {
  try {
    const recommendations = await Recommendations.findOne({ id: req.params.id });
    if (!recommendations) res.status(404).send('No recommendation found');
    res.status(200).send(recommendations);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.recommendations_details_from_user = async (req, res) => {
  try {
    const recommendations = await Recommendations.find({ userId: req.params.id });
    if (!recommendations) res.status(404).send('No recommendation found');
    res.status(200).send(recommendations);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.recommendation_update = async (req, res) => {
  try {
    const recommendation = await Recommendations.findByIdAndUpdate(
      req.params.id, req.body,
    );
    await recommendation.save();
    res.status(200).send(recommendation);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.recommendation_delete = async (req, res) => {
  try {
    const recommendation = await Recommendations.findByIdAndDelete(req.params.id);
    if (!recommendation) res.status(404).send('No recommendation found');
    res.status(204).send();
  } catch (error) {
    res.status(401).send(error);
  }
};
