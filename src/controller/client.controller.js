const https = require('https');
const { TMDBMovieDetail } = require('../model/tmdb-details.model');
const { TMDBMovie, TMDBMovieResults } = require('../model/tmdb.model');

const token = process.env.TMDB_API;
const apiKey = process.env.TMDB_API_KEY;

exports.tmdb_movies = async (req, resp) => {
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
            item.overview,
            item.poster_path,
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

exports.tmdb_movie_details = async (req, resp) => {
  const options = {
    host: 'api.themoviedb.org',
    path: `/3/movie/${req.params.id}?api_key=${apiKey}&language=en-US`,
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
          const parsedData = new TMDBMovieDetail(
            item.id,
            item.title,
            item.genres,
            item.overview,
            item.popularity,
            item.vote_average,
            item.release_date,
            item.poster_path,
            item.budget,
            item.status,
            item.runtime,
            item.revenue,
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
