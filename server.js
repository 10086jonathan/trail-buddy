const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const methodOverride = require('method-override');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.listen(port, function() {
    console.log(`express is listening on port:${port}`);
});

