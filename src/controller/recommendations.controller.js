const { v4: uuidv4 } = require('uuid');
const Recommendations = require('../model/recommendations.model');


exports.recommendations_create = async (req, res) => {
  let recommendation = new Recommendations({
    id: uuidv4(),
    name: req.body.name,
    genre: req.body.genre,
    comment: req.body.comment,
  });

  try {
    await recommendation.save();
    res.status(200);
    res.send("Recommendation Created");
  } catch (error) {
    res.status(401);
    res.send("Error occurred during request");
  }
}

exports.recommendations_details = async (req, res) => {
  try {
    const recommendations = await Recommendations.find({});
    res.status(200).send(recommendations);
  } catch (error) {
    res.status(404).send(error);
  }
}

exports.recommendation_detail = async (req, res) => {
  try {
    const recommendations = await Recommendations.findById(req.params.id);
    if (!recommendations) res.status(404).send("No recommendation found");
    res.status(200).send(recommendations);
  } catch(error) {
    res.status(401).send(error);
  }
}

exports.recommendation_update = async (req, res) => {
  try {
    const recommendation = await Recommendations.findByIdAndUpdate(req.params.id, req.body, (err) => {
      res.status(404).send("Impossible to update", err);
    });
    await recommendation.save();
    res.status(200).send(recommendation);
  } catch (error) {
    res.status(401).send(error);
  }
}

exports.recommendation_delete = async (req, res) => {
  console.log(req.body)
  try {
    const recommendation = await Recommendations.findByIdAndDelete(req.body.id);
    if (!recommendation) res.status(404).send("No recommendation found");
    res.status(204).send();
  } catch (error) {
    res.status(401).send(error);
  }
}
