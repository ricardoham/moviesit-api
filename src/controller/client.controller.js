const axios = require('axios').default;
const { TMDBMovieDetail } = require('../model/tmdb-details.model');
const { TMDBMovie, TMDBMovieResults } = require('../model/tmdb.model');
const { TMDBPersonDetails } = require('../model/tmdb-person-details');
const { TMDBPerson, TMDBPeopleResults } = require('../model/tmdb-people');

const apiKey = process.env.TMDB_API_KEY;
const token = process.env.TMDB_API;

const config = {
  baseURL: 'api.themoviedb.org',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
};

exports.tmdb_movies = async (req, resp) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${req.query.name}&page=${req.query.page}&include_adult=false`;
  try {
    const response = await axios.get(url, config);

    if (response.status !== 200) {
      console.error(`Did not get an OK from the server. Code: ${response.status}`);
      response.resume();
      return;
    }
    const tmdbMovie = response.data.results.map((item) => {
      const parsedData = new TMDBMovie(
        item.id,
        item.title,
        item.overview,
        item.poster_path,
      );
      return parsedData;
    });
    const tmdbMovieResults = new TMDBMovieResults(
      response.data.page, response.data.total_pages, tmdbMovie,
    );
    resp.send(tmdbMovieResults);
  } catch (err) {
    console.log('Error ocurred during API Client call', err);
    resp.status(500).send(err);
  }
};

exports.tmdb_movie_details = async (req, resp) => {
  const url = `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${apiKey}&language=en-US`;

  try {
    const response = await axios.get(url, config);
    if (response.status !== 200) {
      console.error(`Did not get an OK from the server. Code: ${response.status}`);
      response.resume();
      return;
    }
    const { data } = response;
    const parsedData = new TMDBMovieDetail(
      data.id,
      data.title,
      data.genres,
      data.overview,
      data.popularity,
      data.vote_average,
      data.release_date,
      data.poster_path,
      data.budget,
      data.status,
      data.runtime,
      data.revenue,
    );
    resp.send(parsedData);
  } catch (err) {
    console.log('Error ocurred during API Client call', err);
    resp.status(500).send(err);
  }
};

exports.tmdb_people = async (req, resp) => {
  const url = `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=en-US&query=${req.query.name}&page=${req.query.page}&include_adult=false`;
  try {
    const response = await axios.get(url, config);

    if (response.status !== 200) {
      console.error(`Did not get an OK from the server. Code: ${response.status}`);
      response.resume();
      return;
    }
    const tmdbPerson = response.data.results.map((item) => {
      const parsedData = new TMDBPerson(
        item.id,
        item.name,
        item.popularity,
        item.profile_path,
      );
      return parsedData;
    });
    const tmdbPeopleResults = new TMDBPeopleResults(
      response.data.page, response.data.total_pages, tmdbPerson,
    );
    resp.send(tmdbPeopleResults);
  } catch (err) {
    console.log('Error ocurred during API Client call', err);
    resp.status(500).send(err);
  }
};

exports.tmdb_person_details = async (req, resp) => {
  const url = `https://api.themoviedb.org/3/person/${req.params.id}?api_key=${apiKey}&language=en-US`;
  try {
    const response = await axios.get(url, config);

    if (response.status !== 200) {
      console.error(`Did not get an OK from the server. Code: ${response.status}`);
      response.resume();
      return;
    }

    const { data } = response;
    const parsedData = new TMDBPersonDetails(
      data.id,
      data.name,
      data.birthday,
      data.deathday,
      data.place_of_birth,
      data.known_for_department,
      data.biography,
      data.popularity,
      data.profile_path,
    );

    resp.send(parsedData);
  } catch (err) {
    console.log('Error ocurred during API Client call', err);
    resp.status(500).send(err);
  }
};
