const Trail = require('../models/trail');

module.exports = {
    index,
    show,
    new: newTrail,
    create,
    addComment,
    delete: deleteTrail,
    // edit,
    // update
};

function index(req, res) {
    console.log(req.query.name);
    Trail.find({}).populate('createdBy').exec(function (err, trails) {
        res.render('trails/index', { trails, user: req.user });
    });
};

function show(req, res) {
    Trail.findById(req.params.id)
    .populate('createdBy').populate('comments.createdBy').exec(function(err, trail) {
        console.log(err, trail);
        res.render('trails/show', { trail, user: req.user });
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
    //     res.redirect('/trails/:id');
    // });
    req.body.createdBy = req.user._id;
    Trail.create(req.body, function(err, trail) {
        console.log(err);
        res.redirect('/trails');
    });
};

function addComment(req, res) {
    Trail.findById(req.params.id, function(err, trail) {
        req.body.createdBy = req.user._id;
        trail.commnets.push(req.body);
        trail.save(function(err) {
            res.redirect(`/trails/${trail._id}`);
        });
    });
};

function deleteTrail (req, res) {
    Trail.findById(req.params.id, function(err, trail) {
        trail.deleteOne(req.body, function(err) {
            res.redirect(`/trails`)
        });
    });
};

// function edit(req, res) {
//     Trail.findById(req.params.id, function(err, trail) {
//         res.render('trails/edit', {
//             trailId: req.params.id,
//             todo: trail.(req.params.id)
//         });
//     });
// };

// function update(req, res) {
//     req.body.done = false;
//     Todo.updateOne(req.body, req.params.id);
//     res.redirect('/todos');
// };