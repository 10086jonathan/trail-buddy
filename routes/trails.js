const express = require('express');
const router = express.Router();
const trailsCntrl = require('../controllers/trails');
const isAuthenticated = require('../utils/authorization');


router.get('/', trailsCntrl.index);

module.exports = router;