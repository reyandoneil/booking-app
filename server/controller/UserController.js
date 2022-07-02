const User = require('../models/User.js');

class UserController {
  static async updateUser(req, res) {
    try {
      req.headers
      const updateUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (error) {

      res.status(500).json(error);
    }
  }

  static async deleteUser(req, res) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json('Success Deleted User');
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getAll(req, res) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      next(error)
    }
  }

  static async get(req, res,next) {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController;
