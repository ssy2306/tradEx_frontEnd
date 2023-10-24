const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const token = jwt.sign({ userEmail: user.email, userPassword: user.password }, 'shahil', { expiresIn: '1h' });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, 'shahil');
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
};

module.exports = { generateToken, verifyToken };
