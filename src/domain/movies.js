module.exports = class Movies{
  constructor(id = null, name, genre, synopses, imdbScore) {
    this.id = id;
    this.name = name;
    this.genre = genre;
    this.synopses = synopses;
    this.imdbScore = imdbScore;
  }
}
