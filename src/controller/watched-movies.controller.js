const { v4: uuidv4 } = require('uuid');
const WatchedMovies = require('../model/waitlist.model');

exports.watchedMovies_create = async (req, res, next) => {
  const watchedMovies = new WatchedMovies({
    id: uuidv4(),
    name: req.body.name,
    genre: req.body.genre,
  });

  try {
    await watchedMovies.save();
    res.send('Watched Movies Created');
  } catch (error) {
    next(error);
  }
};

exports.watchedMovies_details = async (req, res) => {
  const watchedMovies = await WatchedMovies.find({});

  try {
    res.send(watchedMovies);
  } catch (error) {
    res.status(404).send(error);
  }
};

exports.watchedMovies_detail = async (req, res) => {
  try {
    const watchedMovies = await WatchedMovies.findById(req.params.id);
    if (!watchedMovies) res.status(404).send('No watched movies found');
    res.status(200).send(watchedMovies);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.watchedMovies_update = async (req, res) => {
  try {
    const watchedMovies = await WatchedMovies.findByIdAndUpdate(req.params.id, req.body, (err) => {
      res.status(404).send('Impossible to update', err);
    });
    await watchedMovies.save();
    res.status(200).send(watchedMovies);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.watchedMovies_delete = async (req, res) => {
  console.log(req.body);
  try {
    const watchedMovies = await WatchedMovies.findByIdAndDelete(req.body.id);
    if (!watchedMovies) res.status(404).send('No watched movies  found');
    res.status(204).send();
  } catch (error) {
    res.status(401).send(error);
  }
};
