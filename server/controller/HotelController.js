const { Promise } = require('mongoose');
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
      res.status(200).json({
        totalHotel: hotels.length,
        data: hotels,
      });
    } catch (error) {
      console.log('error');
      res.status(500).json(error);
    }
  }

  static async get(req, res, next) {
    try {
      const hotel = await Hotel.findById(req.params.id);
      res.status(200).json(hotel);
    } catch (error) {
      next(error);
    }
  }

  static async countByCity(req, res, next) {
    const cities = req.query.cities.split(',');
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Hotel.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (error) {
      next(error);
    }
  }

  static async countByType(req, res, next) {
    try {
      const hotel = await Hotel.findById(req.params.id);
      res.status(200).json(hotel);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = HotelController;
