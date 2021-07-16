module.exports = {
  TMDBMovie: function TMDBMovie(
    id,
    title,
    overview,
    posterPath,
  ) {
    this.id = id;
    this.title = title;
    this.overview = overview;
    this.posterPath = posterPath;
  },
  TMDBMovieResults: function TMDBMovieResults(
    page,
    results,
  ) {
    this.page = page;
    this.results = results;
  },
};
