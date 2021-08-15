module.exports = {
  TMDBPerson: function TMDBPerson(
    id,
    name,
    popularity,
    profilePatch,
  ) {
    this.id = id;
    this.name = name;
    this.popularity = popularity;
    this.profilePatch = profilePatch;
  },
  TMDBPeopleResults: function TMDBPeopleResults(
    page,
    totalPages,
    results,
  ) {
    this.page = page;
    this.totalPages = totalPages;
    this.results = results;
  },
};
