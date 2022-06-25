const Hotel = require('../models/Hotel.js');

class HotelController {
  static async createHotel(req, res) {
    const newHotel = new Hotel(req.body);
    try {
      const saveHotel = await newHotel.save();
      res.status(200).json(saveHotel);
    } catch (error) {
      console.log('error');
      res.status(500).json(error);
    }
  }

  static async updateHotel(req, res) {
    try {
      const updateHotel = await Hotel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateHotel);
    } catch (error) {
      console.log('error');
      res.status(500).json(error);
    }
  }

  static async deleteHotel(req, res) {
    try {
      await Hotel.findByIdAndDelete(req.params.id);
      res.status(200).json('Success Deleted Hotel');
    } catch (error) {
      console.log('error');
      res.status(500).json(error);
    }
  }

  static async getAll(req, res) {
    try {
      const hotels = await Hotel.find();
      res.status(200).json(hotels);
    } catch (error) {
      console.log('error');
      res.status(500).json(error);
    }
  }

  static async get(req, res,next) {
    try {
      const hotel = await Hotel.findById(req.params.id);
      res.status(200).json(hotel);
    } catch (error) {
      next(error)
    }
  }
}

module.exports = HotelController;
