const Trail = require('../models/trail');

function create(req, res) {
    Trail.findById(req.params.id, function (err, trail) {
        console.log(err);
        trail.comments.push(req.body);
        trail.save(function (err) {
            console.log(err);
            res.redirect(`/trails/${trail._id}`);
        });
    });
}

module.exports = {
    create
};