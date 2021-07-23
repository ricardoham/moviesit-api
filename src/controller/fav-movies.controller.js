const FavMovies = require('../model/fav-movies.model');

exports.fav_movies = (req, res) => {
  console.log(req);
  res.send('Fav Movie Controller');
};

exports.fav_movies_create = async (req, res, next) => {
  const movie = new FavMovies({
    isFavorite: req.body.isFavorite,
    movieId: req.body.id,
    title: req.body.title,
    genres: req.body.genre,
    overview: req.body.overview,
    popularity: req.body.popularity,
    voteAverage: req.body.voteAverage,
    posterPath: req.body.posterPath,
    budget: req.body.budget,
    runtime: req.body.runtime,
    revenue: req.body.revenue,
  });

  try {
    await movie.save();
    res.send('Movie created');
  } catch (err) {
    next(err);
  }
};

exports.fav_movies_details = async (req, res) => {
  try {
    const movies = await FavMovies.find({});
    res.status(200).send(movies);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.fav_movie_detail = async (req, res) => {
  try {
    const movie = await FavMovies.findById(req.params.id);
    if (!movie) res.status(404).send('No movie found');
    res.status(200).send(movie);
  } catch (error) {
    res.status(401).send(error);
  }
};

exports.fav_movie_delete = async (req, res) => {
  try {
    const movie = await FavMovies.findByIdAndDelete(req.body.id);
    if (!movie) res.status(404).send('No movies found');
    res.status(204).send();
  } catch (error) {
    res.status(401).send(error);
  }
};
