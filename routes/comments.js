const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const isAuthenticated = require('../utils/authorization');

router.post('/trails/:id/comments', isAuthenticated, commentsCtrl.create);

module.exports = router;