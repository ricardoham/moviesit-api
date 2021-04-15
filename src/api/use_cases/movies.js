const Movies = require('../../domain/movies');

exports.Create = (name, genre, synopses, imdbScore, { moviesRepository }) => {
  const movie = new Movies(name, genre, synopses, imdbScore);
  return moviesRepository.persist(movie);
}

exports.Details = ({ moviesRepository }) => {
  return moviesRepository.find();
}
