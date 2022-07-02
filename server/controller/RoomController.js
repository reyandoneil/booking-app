const Room = require('../models/Room.js');
const Hotel = require('../models/Hotel');

class RoomController {
  static async createRoom(req, res, next) {
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);
    try {
      const saveRoom = await newRoom.save();
      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $push: { rooms: saveRoom._id },
        });
      } catch (error) {
        next(error);
      }
      res.status(200).json(saveRoom);
    } catch (error) {
      console.log('error');
      res.status(500).json(error);
    }
  }

  static async updateRoom(req, res) {
    try {
      const updateRoom = await Room.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateRoom);
    } catch (error) {
      console.log('error');
      res.status(500).json(error);
    }
  }

  static async deleteRoom(req, res, next) {
    const id = req.params.id
    const hotelId = req.params.hotelId;

    try {
      await Room.findByIdAndDelete(id);
      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $pull: { rooms: id },
        });
      } catch (error) {
        next(error);
      }
      res.status(200).json('Success Deleted Room');
    } catch (error) {
    
      res.status(500).json(error);
    }
  }

  static async getAll(req, res) {
    try {
      const room = await Room.find();
      res.status(200).json(room);
    } catch (error) {
    
      res.status(500).json(error);
    }
  }

  static async get(req, res, next) {
    try {
      const room = await Room.findById(req.params.id);
      res.status(200).json(room);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = RoomController;
