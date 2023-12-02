const express = require('express');
const router = express.Router();

const chartData = require("../controllers/apis/ChartData");
const accountAuthenticated = require('../auth/express-session/accountAuthenticated');
const isAuthenticated = require("../auth/express-session/authenticate");
const postComments = require('../controllers/apis/postComment');
const getComments = require('../controllers/apis/getComments');
router.get('/chartData', isAuthenticated, chartData);
router.post('/postComment', isAuthenticated, postComments);
router.get('/getComments', isAuthenticated, getComments)
module.exports = router;