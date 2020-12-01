const express = require('express');
const router = express.Router();
const trailsCntrl = require('../controllers/trails');
const isAuthenticated = require('../utils/authorization');


router.get('/', isAuthenticated, trailsCntrl.index);
router.get('/new', isAuthenticated, trailsCntrl.new);
router.post('/', isAuthenticated, trailsCntrl.create);

module.exports = router;