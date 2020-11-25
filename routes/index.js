const express = require('express');
const router = express.Router();
const passport = require('passport');


const Trail = require('../models/trail');

router.get('/auth/google', passport.authenticate(
    'google', {
        scope: ['profile', 'email']
}));

router.get('/oauth2callback', passport.authenticate(
    'google', {
        successRedirect: '/trails',
        failureRedirect: '/'
}));

router.get('/logout', function(req, res) {
    req.logOut();
    res.redirect('/');
});

router.get('/', function(req, res) {
    res.render('index');
});

module.exports = router;