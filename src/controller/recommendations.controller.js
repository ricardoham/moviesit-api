const { v4: uuidv4 } = require('uuid');
const Recommendations = require('../model/recommendations.model');


exports.recommendations_create = (req, res, next) => {
  let recommendation = new Recommendations({
    id: uuidv4(),
    name: req.body.name,
    genre: req.body.genre,
    comment: req.body.comment,
  });

  try {
    await recommendation.save();
    res.send("Recommendation Created");
  } catch (error) {
    next(error);
  }
}

exports.recommendations_details = async (req, res) => {
  const recommendations = await Recommendations.find({});

  try {
    res.send(recommendations);
  } catch (error) {
    res.status(404).send(error);
  }
}
