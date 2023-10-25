const express = require('express');
const router = express.Router();

const loginUser = require('../controllers/users/loginUser.js');
const signUp = require('../controllers/users/signUp.js');
const accountAuthenticated = require('../auth/express_session/accountAuthenticated.js');
const editPhoneNumber = require('../controllers/users/editPhoneNumber.js');
//const authenticate = require('../auth/jsonwebtoken/jwt.js')
router.post('/login', loginUser);
router.post('/signup', signUp);
router.put('/edit/phonenumber', accountAuthenticated,editPhoneNumber)

module.exports = router;