const express = require('express');
const cors = require('cors');
const path = require('path');
const expressSession = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
require('dotenv').config();

const config = require('./configs/config');
const db = require('./configs/mongo-config');
const auth = require('./routes/auth.route');
const favMovies = require('./routes/fav-movies.route');
const favPeople = require('./routes/fav-people.route');
const clientAPI = require('./routes/client.route');
const comments = require('./routes/comments.route');
const recommendation = require('./routes/comments.route');
const waitList = require('./routes/waitlist.route');
const watchedMovies = require('./routes/watched-movies.route');
const friends = require('./routes/friends.route');

// App variables
const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

// Session configurations
const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false,
};

if (app.get('env') === 'production') {
  // Serve secure cookies, requires HTTPS
  session.cookie.secure = true;
}

// Passport configurations
const strategy = new Auth0Strategy({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  callbackURL: process.env.AUTH0_CALLBACK_URL,
},
((accessToken, refreshToken, extraParams, profile, done) => {
  /**
   * Access tokens are used to authorize users to an API
   * (resource server)
   * accessToken is the token to call the Auth0 API
   * or a secured third-party API
   * extraParams.id_token has the JSON Web Token
   * profile has all the information from the user
   */
  console.log('test');
  return done(null, profile);
}));

// App Configuration
app.set('view', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession(session));
passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated();
  next();
});

app.use(cors(corsOptions));
app.use(express.json());

db.on('connected', console.log.bind(console, 'MongoDB Connected: '));
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.use('/', auth);
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
