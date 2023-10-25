const express = require('express');
const router = express.Router();

const accountAuthenticated = require('../auth/express_session/accountAuthenticated.js');
const test1 = require('../controllers/test/submit_test.js')

router.post('/submit-test', accountAuthenticated, test1);

module.exports = router;