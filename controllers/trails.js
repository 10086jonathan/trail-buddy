const Trail = require('../models/trail');

module.exports = {
    index
};

function index(req, res) {
    console.log(req.query.name);
    Trail.find({}).populate('createdBy').exec(function (err, trails) {
        res.render('trails/index', {
            trails,
            user: req.user
        });
    });
};