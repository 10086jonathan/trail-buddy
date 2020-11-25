const Trail = require('../models/trail');

module.exports = {
    index
};

function index(req, res) {
    Trail.find({}).populate('createdBy').exec(function (err, trails) {
        res.render('trails/index', { trails });
    });
};