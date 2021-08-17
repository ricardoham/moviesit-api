const express = require('express');

const router = express.Router();
const passport = require('passport');
const authController = require('../controller/auth.controller');

require('dotenv').config();

router.get(
  '/login',
  passport.authenticate('auth0', {
    scope: 'openid email profile',
  }),
  (req, res) => {
    res.redirect('/');
  },
);

router.get('/callback', authController.auth_callback);
router.get('/logout', authController.auth_logout);

module.exports = router;
