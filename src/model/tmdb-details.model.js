module.exports = {
  TMDBMovieDetail: function TMDBMovieDetail(
    id,
    title,
    genres,
    overview,
    popularity,
    voteAverage,
    releaseDate,
    posterPath,
    budget,
    status,
    runtime,
    revenue,
  ) {
    this.id = id;
    this.title = title;
    this.genres = genres;
    this.overview = overview;
    this.popularity = popularity;
    this.voteAverage = voteAverage;
    this.releaseDate = releaseDate;
    this.posterPath = posterPath;
    this.budget = budget;
    this.status = status;
    this.runtime = runtime;
    this.revenue = revenue;
  },
};
