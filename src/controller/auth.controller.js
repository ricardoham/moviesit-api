/* eslint-disable consistent-return */
const passport = require('passport');
const querystring = require('querystring');

exports.auth_callback = (req, res, next) => {
  passport.authenticate('auth0', (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect('/login');
    }
    req.logIn(user, (e) => {
      if (e) {
        return next(e);
      }
      const { returnTo } = req.session;
      delete req.session.returnTo;
      res.redirect(returnTo || '/');
    });
  })(req, res, next);
};

exports.auth_logout = (req, res) => {
  req.logOut();

  let returnTo = `${req.protocol}://${req.hostname}`;
  const port = req.connection.localPort;

  if (port !== undefined && port !== 80 && port !== 443) {
    returnTo = process.env.NODE_ENV === 'production'
      ? `${returnTo}/`
      : `${returnTo}:${port}/`;
  }

  const logoutURL = new URL(
    `https://${process.env.AUTH0_DOMAIN}/v2/logout`,
  );

  const searchString = querystring.stringify({
    client_id: process.env.AUTH0_CLIENT_ID,
    returnTo,
  });
  logoutURL.search = searchString;

  res.redirect(logoutURL);
};
