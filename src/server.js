const express = require('express');
const cors = require('cors');
const config = require('./configs/config');
const db = require('./configs/mongo-config');
const favMovies = require('./routes/fav-movies.route');
const favPeople = require('./routes/fav-people.route');
const clientAPI = require('./routes/client.route');
const comments = require('./routes/comments.route');
const recommendation = require('./routes/comments.route');
const waitList = require('./routes/waitlist.route');
const watchedMovies = require('./routes/watched-movies.route');
const friends = require('./routes/friends.route');

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

db.on('connected', console.log.bind(console, 'MongoDB Connected: '));
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// Routes
app.use('/', favMovies);
app.use('/', favPeople);
app.use('/', clientAPI);
app.use('/', comments);
app.use('/', recommendation);
app.use('/', waitList);
app.use('/', watchedMovies);
app.use('/', friends);

app.listen(config.API_PORT, () => {
  console.log(`API running on port ${config.API_PORT}`);
});
