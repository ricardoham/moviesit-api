'use strict';

const _serializeSingleMovie = (movie) => {
  return {
    'id': movie.id,
    'name': movie.name,
    'genre': movie.genre,
    'synopses': movie.synopses,
    'imdbScore': movie.imdbScore,
  };
};

module.exports = class MovieSerialize {

  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingleMovie);
    }
    return _serializeSingleMovie(data);
  }

};
