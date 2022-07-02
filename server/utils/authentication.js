const User = require('../models/User');
const { verifyToken } = require('./jwt');
const createError = require('../utils/errorHandler');

const authentication = async (req, res, next) => {
  try {
    const access_token = req.headers.access_token;
    if (access_token) {
      decode = verifyToken(access_token);
      req.userData = decode;

      const findUserById = await User.findById(decode.id);
      if (!findUserById) {
        return next(createError(404, 'User not found'));
      } else {
        next();
      }
    } else {
      return next(createError(401, 'Login needed'));
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
