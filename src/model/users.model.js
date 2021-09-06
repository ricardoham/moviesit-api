module.exports = {
  Users: function Users(
    id,
    name,
    picture,
  ) {
    this.id = id;
    this.name = name;
    this.picture = picture;
  },
  UsersResults: function UsersResults(
    page,
    totalPages,
    results,
  ) {
    this.page = page;
    this.totalPages = totalPages;
    this.results = results;
  },
};
