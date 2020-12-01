const Trail = require('../models/trail');

module.exports = {
    index,
    new: newTrail,
    create
};

function index(req, res) {
    console.log(req.query.name);
    Trail.find({}).populate('createdBy').exec(function (err, trails) {
        res.render('trails/index', { trails, user: req.user });
    });
};

function newTrail(req, res) {
    res.render('trails/new', { user: req.user });
};

function create(req, res) {
    // const trail = new Trail(req.body);
    // trail.save(function(err) {
    //     if(err) return res.render('trails/new', { user: req.user });
    //     console.log(trail);
    //     res.redirect('/trails', { user: req.user });
    // });
    req.body.createdBy = req.user._id;
    Trail.create(req.body, function(err, trail) {
        console.log(err);
        res.redirect('/trails');
    });
};

