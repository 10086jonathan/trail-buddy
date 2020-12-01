const express = require('express');
const router = express.Router();
const trailsCtrl = require('../controllers/trails');
const isAuthenticated = require('../utils/authorization');


router.get('/', isAuthenticated, trailsCtrl.index);
router.get('/new', isAuthenticated, trailsCtrl.new);
router.get('/:id', isAuthenticated, trailsCtrl.show);
router.post('/', isAuthenticated, trailsCtrl.create);
router.delete('/:id', isAuthenticated, trailsCtrl.delete);
// router.get('/:id/edit', isAuthenticated, trailsCtrl.edit);
// router.put('/:id', isAuthenticated, trailsCtrl.update);


module.exports = router;