const { v4: uuidv4 } = require('uuid');
const WatchedMovies = require('../model/waitlist.model');


exports.watchedMovies_create = async (req, res, next) => {
  let watchedMovies = new WaitList({
    id: uuidv4(),
    name: req.body.name,
    genre: req.body.genre,
  });

  try {
    await watchedMovies.save();
    res.send("Watched Movies Created");
  } catch (error) {
    next(error);
  }
}

exports.watchedMovies_details = async (req, res) => {
  const watchedMovies = await WatchedMovies.find({});

  try {
    res.send(watchedMovies);
  } catch (error) {
    res.status(404).send(error);
  }
}
