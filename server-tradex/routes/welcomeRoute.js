const express = require('express');
const router = express.Router();

const welcomeController = require('../controllers/welcome/welcome');

router.get('/welcome', welcomeController);

module.exports = router;
