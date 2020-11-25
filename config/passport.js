const passport = require('passport');
const User = require('../models/user');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}, function(accessToken, refreshToken, profile, cb) {
    User.findOne({ googleId: profile.id }, function(err, foundUser) {
        if(err) return cb(err);
        if(foundUser) {
            return cb(null, foundUser);
        } else {
            const newUser = new User({
                displayName: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id,
                avatarURL: profile.avatarURL
            });
            newUser.save(function(err) {
                if(err) return cb(err);
                return cb(null, newUser);
            });
        };
    });
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});