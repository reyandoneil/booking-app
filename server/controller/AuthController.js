const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { signToken } = require('../utils/jwt');
const createError = require('../utils/errorHandler');

class AuthController {
  static async register(req, res, next) {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: hash,
      });
      const saveUser = await newUser.save();
      res.status(200).json({
        statusCode: 200,
        message: 'Successfully created user',
        data: saveUser,
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const email = await User.findOne({ email: req.body.email });
      if (!email)
        return next(createError(404, 'user or Email not found'));
      const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        email.password
      );
      if (!isPasswordCorrect)
        return next(createError(404, 'Wrong user or Email'));
      //access_token
      const access_token = signToken({
        id: email.id,
        isAdmin: email.isAdmin,
      });
      const { password, isAdmin, ...userData } = email._doc;
      res
        .cookie('access_token', access_token, { httpOnly: true })
        .status(200)
        .json({ userData, access_token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
