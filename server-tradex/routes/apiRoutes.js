const express = require('express');
const router = express.Router();

const chartData = require("../controllers/apis/ChartData");
const accountAuthenticated = require('../auth/express-session/accountAuthenticated');
const isAuthenticated = require("../auth/express-session/authenticate")
router.get('/chartData', isAuthenticated, chartData);

module.exports = router;