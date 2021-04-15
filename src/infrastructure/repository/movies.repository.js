const Movies = require("../../domain/movies");
const MongooseMovies = require("../shemas/movies.schema");
const MoviesRepository = require("../../domain/movies-repository");

module.exports = class extends MoviesRepository {
  constructor() {
    super();
  }

  async persist(moviesEntity) {
    const { name, genre, synopses, imdbScore } = moviesEntity;
    const movie = new MongooseMovies({ name, genre, synopses, imdbScore });

    await movie.save();
    return new Movies(movie.id, movie.name, movie.genre, movie.synopses, movie.imdbScore);
  }

  async find() {
    const movies = await MongooseMovies.find();
    return movies.map((movie) => {
      return new User(movie.id, movie.name, movie.genre, movie.synopses, movie.imdbScore);
    });
  }

}

