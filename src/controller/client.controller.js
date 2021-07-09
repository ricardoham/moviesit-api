const https = require('https');
const { TMDBMovie, TMDBMovieResults } = require('../model/tmdb.model');

exports.tmdb_movies = async (req, resp) => {
  const token = process.env.TMDB_API;
  const apiKey = process.env.TMDB_API_KEY;

  const options = {
    host: 'api.themoviedb.org',
    path: `/3/search/movie?api_key=${apiKey}&language=en-US&query=${req.query.name}&page=${req.query.page}&include_adult=false`,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    https.request(options, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Did not get an OK from the server. Code: ${res.statusCode}`);
        res.resume();
        return;
      }
      const data = [];
      res.on('data', (chunk) => {
        data.push(chunk);
      }).on('end', () => {
        const parsed = JSON.parse(data);
        const tmdbMovie = parsed.results.map((item) => {
          const parsedData = new TMDBMovie(
            item.id,
            item.title,
            item.genre_ids,
            item.overview,
            item.popularity,
            item.vote_average,
            item.release_date,
          );
          return parsedData;
        });
        const tmdbMovieResults = new TMDBMovieResults(parsed.page, tmdbMovie);
        resp.send(tmdbMovieResults);
      });
    }).end();
  } catch (err) {
    console.log('Error ocurred during API Client call', err);
    resp.status(500).send(err);
  }
};
