const express = require('express');
const cors = require('cors');
const config = require('./configs/config');
const db = require('./configs/mongo-config');
const favMovies = require('./routes/fav-movies.route');
const favPeople = require('./routes/fav-people.route');
const clientAPI = require('./routes/client.route');
const comments = require('./routes/comments.route');
const recommendation = require('./routes/recommendation.route');
const friends = require('./routes/friends.route');
const waitList = require('./routes/waitlist.route');
const profile = require('./routes/profile.route');
const deposition = require('./routes/deposition.route');
// const watchedMovies = require('./routes/watched-movies.route');

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};
const apiRouter = express.Router();

app.use(cors(corsOptions));
app.use(express.json());

db.on('connected', console.log.bind(console, 'MongoDB Connected: '));
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// Routes
app.use('/api/v1', apiRouter);
apiRouter.use('/favmovies', favMovies);
apiRouter.use('/favpeople', favPeople);
apiRouter.use('/client', clientAPI);
apiRouter.use('/comments', comments);
apiRouter.use('/recommendations', recommendation);
apiRouter.use('/friends', friends);
apiRouter.use('/waitlist', waitList);
apiRouter.use('/profile', profile);
apiRouter.use('/deposition', deposition);
// app.use('/', watchedMovies);

app.listen(config.API_PORT, () => {
  console.log(`API running on port ${config.API_PORT}`);
});
