const express = require('express');
const cors = require('cors');
const config = require('./configs/config');
const db = require('./configs/mongo-config');
const favMovies = require('./routes/fav-movies.route');
const favPeople = require('./routes/fav-people.route');
const clientAPI = require('./routes/client.route');
const comments = require('./routes/comments.route');
const recommendation = require('./routes/recommendation.route');
const waitList = require('./routes/waitlist.route');
const profile = require('./routes/profile.route');
const deposition = require('./routes/deposition.route');
const banComment = require('./routes/bancomment.route');
const report = require('./routes/report.route');

const app = express();
const corsOptions = {
  origin: process.env.CLIENT_ORIGIN_URL,
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
apiRouter.use('/waitlist', waitList);
apiRouter.use('/profile', profile);
apiRouter.use('/deposition', deposition);
apiRouter.use('/bancomment', banComment);
apiRouter.use('/report', report);

app.listen(config.PORT, () => {
  console.log(`API running on port ${config.PORT}`);
});
