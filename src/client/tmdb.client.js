const https = require('https');

function getMoviesFromClient(query) {
  const token = process.env.TMDB_API;

  https.request({
    method: 'GET',
    host: `https://api.themoviedb.org/3/movie/${query}`,
    headers: {'Content-Type': 'application/json', 'Authorization': `'Bearer ${token}'`}
  }, (res) => {
    if (res.statusCode !== 200) {
      console.error(`Error occurred with client response: ${res.statusCode}`);
    }
  })
}
