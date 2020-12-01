const Trail = require('../models/trail');

module.exports = {
    create
};

function create(req, res) {
    Trail.findById(req.params.id, function (err, trail) {
        console.log(err);
        trail.comments.push(req.body);
        trail.save(function (err) {
            console.log(err);
            res.redirect(`/trails/${trail._id}`);
        });
    });
};