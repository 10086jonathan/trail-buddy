const express = require('express');
const router = express.Router();
const isAuthenticated = require('../utils/authorization');

const trailsCntrl = require('../controllers/trails');

router.get('/trails', isAuthenticated, trailsCntrl.index);

module.exports = router;