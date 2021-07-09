module.exports = {
  TMDBMovie: function TMDBMovie(
    id,
    title,
    genre,
    overview,
    popularity,
    voteAverage,
    releaseDate,
  ) {
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.overview = overview;
    this.popularity = popularity;
    this.voteAverage = voteAverage;
    this.releaseDate = releaseDate;
  },
  TMDBMovieResults: function TMDBMovieResults(
    page,
    results,
  ) {
    this.page = page;
    this.results = results;
  },
};
