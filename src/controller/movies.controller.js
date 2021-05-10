const Movies = require("../model/movies.model");

exports.movies = (req, res) => {
  console.log(req);
  res.send("Movie Controller");
};

exports.movies_create = async (req, res, next) => {
  let movie = new Movies({
    name: req.body.name,
    genre: req.body.genre,
    synopses: req.body.synopses,
    imdbScore: req.body.imdbScore,
  });

  try {
    movie.save();
    res.send("Movie created");
  } catch(err) {
    next(err)
  }
};

exports.movies_details = (req, res) => {
  Movies.find({}, (err, movies) => {
    res.send(movies)
  })
}
