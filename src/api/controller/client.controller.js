const https = require('https');
const TMDB = require("../../model/tmdb.model");

exports.tmdb_movies = async (req, resp) => {

  const token = process.env.TMDB_API;
  const options = {
    host: 'api.themoviedb.org',
    path: '/3/movie/76341',
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  };

  https.request(options, (res) => {
    if (res.statusCode !== 200) {
      console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
      res.resume();
      return;
    }
    let data = [];
    res.on('data', (chunk) => {
      data.push(chunk);
    });
    res.on('end', () => {
      const parsed = JSON.parse(Buffer.concat(data).toString());
      let tmdbMovie = new TMDB({
        id: parsed.id,
        title: parsed.original_title,
        genre: parsed.genres,
        overview: parsed.overview,
        popularity: parsed.popularity,
        voteAverage: parsed.vote_average,
      })
      resp.send(tmdbMovie);
    })
  }).end();
  
}
