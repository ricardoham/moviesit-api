const { v4: uuidv4 } = require('uuid');
const FavMovies = require('../model/fav-movies.model');

exports.fav_movies = (req, res) => {
  // console.log(req);
  res.send('Fav Movie Controller');
};

exports.fav_movies_create = async (req, res, next) => {
  const favMovie = new FavMovies({
    id: uuidv4(),
    movieId: req.body.id,
    isFavorite: req.body.isFavorite,
    title: req.body.title,
    genres: req.body.genres,
    overview: req.body.overview,
    popularity: req.body.popularity,
    voteAverage: req.body.voteAverage,
    releaseDate: req.body.releaseDate,
    posterPath: req.body.posterPath,
    budget: req.body.budget,
    runtime: req.body.runtime,
    revenue: req.body.revenue,
  });

  try {
    await favMovie.save();
    res.send('favMovie created');
  } catch (err) {
    next(err);
  }
};

exports.fav_movies_details = async (req, res) => {
  try {
    const movies = await FavMovies.find({});
    const results = {
      results: movies,
      page: 0,
    };
    res.status(200).send(results);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.fav_movie_detail = async (req, res) => {
  try {
    const movie = await FavMovies.findOne({ movieId: req.params.id });
    if (!movie) res.status(404).send('No movie found');
    res.status(200).send(movie);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.fav_movie_delete = async (req, res) => {
  try {
    const movie = await FavMovies.deleteOne({ id: req.body.id });
    if (!movie) res.status(404).send('No movies found');
    res.status(204).send();
  } catch (error) {
    res.status(401).send(error);
  }
};
