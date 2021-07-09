const Movies = require('../model/movies.model');

exports.movies = (req, res) => {
  console.log(req);
  res.send('Movie Controller');
};

exports.movies_create = async (req, res, next) => {
  const movie = new Movies({
    name: req.body.name,
    genre: req.body.genre,
    synopses: req.body.synopses,
    imdbScore: req.body.imdbScore,
  });

  try {
    await movie.save();
    res.send('Movie created');
  } catch (err) {
    next(err);
  }
};

exports.movies_details = async (req, res) => {
  try {
    const movies = await Movies.find({});
    res.status(200).send(movies);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.movie_detail = async (req, res) => {
  try {
    const movie = await Movies.findById(req.params.id);
    if (!movie) res.status(404).send('No movie found');
    res.status(200).send(movie);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.movie_delete = async (req, res) => {
  console.log(req.body);
  try {
    const movie = await Movies.findByIdAndDelete(req.body.id);
    if (!movie) res.status(404).send('No movies found');
    res.status(204).send();
  } catch (error) {
    res.status(401).send(error);
  }
};
