const Movies = require("../model/movies.model");

exports.movies = (req, res) => {
  console.log(req);
  res.send("Movie Controller");
};

exports.movies_create = (req, res) => {
  let movie = new Movies({
    name: req.body.name,
    genre: req.body.genre,
    synopses: req.body.synopses,
    imdbScore: req.body.imdbScore,
  });

  movie.save((err) => {
    if (err) {
      return next(err);
    }
    res.send("Movie created");
  });
};

exports.movies_details = (req, res) => {
  Movies.find({}, (err, movies) => {
    res.send(movies)
  })
}
