const { verify, sign } = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const signToken = (payload) => {
  const token = sign(payload, SECRET);
  return token;
};

const verifyToken = (token) => {
  const ver = verify(token, SECRET);
  return ver;
};

module.exports = {
  signToken,
  verifyToken,
};
