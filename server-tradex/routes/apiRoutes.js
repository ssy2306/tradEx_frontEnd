const express = require('express');
const router = express.Router();

const chartData = require("../controllers/apis/ChartData");
const accountAuthenticated = require('../auth/express-session/accountAuthenticated');
const isAuthenticated = require("../auth/express-session/authenticate");
const postComments = require('../controllers/apis/postComment');
const getComments = require('../controllers/apis/getComments');
const postFeedback = require('../controllers/apis/feedback');
router.get('/chartData', chartData);
router.post('/postComment',  postComments);
router.get('/getComments', getComments)
router.post('/feedback', postFeedback)
module.exports = router;