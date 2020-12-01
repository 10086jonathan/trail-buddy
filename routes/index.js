const express = require('express');
const router = express.Router();
const passport = require('passport');
const indexCtrl = require('../controllers/index');


router.get('/auth/google', passport.authenticate(
    'google', {
        scope: ['profile', 'email']
}));

router.get('/oauth2callback', passport.authenticate(
    'google', {
        successRedirect: '/',
        failureRedirect: '/'
}));

router.get('/logout', function(req, res) {
    req.logOut();
    res.redirect('/');
});

router.get('/', indexCtrl.index);

module.exports = router;