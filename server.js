const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');

const indexRouter = require('./routes/index');
const trailsRouter = require('./routes/trails');
const app = express();

app.set('view engine', 'ejs');

require('dotenv').config();
require('./config/database');
require('./config/passport');

app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/trails', trailsRouter);

app.listen(port, function() {
    console.log(`express is listening on port:${port}`);
});

