module.exports = {
  TMDBPersonDetails: function TMDBPersonDetails(
    id,
    name,
    birthDay,
    deathDay,
    placeOfBirth,
    department,
    biography,
    popularity,
    profilePatch,
  ) {
    this.id = id;
    this.name = name;
    this.birthDay = birthDay;
    this.deathDay = deathDay;
    this.placeOfBirth = placeOfBirth;
    this.department = department;
    this.biography = biography;
    this.popularity = popularity;
    this.profilePatch = profilePatch;
  },
};
