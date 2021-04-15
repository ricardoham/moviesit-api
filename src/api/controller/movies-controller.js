const MoviesUseCase = require("../use_cases/movies");

// exports.movies_create = (req, res) => {
//   let movie = new Movies({
//     name: req.body.name,
//     genre: req.body.genre,
//     synopses: req.body.synopses,
//     imdbScore: req.body.imdbScore,
//   });

//   movie.save((err) => {
//     if (err) {
//       return next(err);
//     }
//     res.send("Movie created");
//   });
// };

// exports.movies_details = (req, res) => {
//   Movies.find({}, (err, movies) => {
//     res.send(movies)
//   })
// }

module.exports = {

async createMovie(request) {

  // Context
  const serviceLocator = request.server.app.serviceLocator;

  // Input
  const {  name, genre, synopses, imdbScore } = request.payload;

  // Treatment
  const movie = await MoviesUseCase.Create(name, genre, synopses, imdbScore);

  // Output
  return serviceLocator.movieSerializer.serialize(movie);
},

async findMovies(request) {

  // Context
  const serviceLocator = request.server.app.serviceLocator;

  // Treatment
  const movies = await MoviesUseCase.Details(serviceLocator);

  // Output
  return movies.map(serviceLocator.movieSerializer.serialize)
},

};
