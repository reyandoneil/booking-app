const { Promise } = require('mongoose');
const Hotel = require('../models/Hotel.js');
const errorHandler = require('../utils/errorHandler');

class HotelController {
  static async createHotel(req, res, next) {
    const newHotel = new Hotel(req.body);
    const findHotelName = await Hotel.findOne({
      name: req.body.name,
    });
    if (findHotelName) {
      next(errorHandler(404, 'Hotel name already used'));
    } else {
      try {
        const saveHotel = await newHotel.save();
        res.status(200).json(saveHotel);
      } catch (error) {
        res.status(500).json(error);
      }
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
      res.status(500).json(error);
    }
  }

  static async deleteHotel(req, res) {
    try {
      await Hotel.findByIdAndDelete(req.params.id);
      res.status(200).json('Success Deleted Hotel');
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getAll(req, res) {
    const { min, max, ...oth } = req.query;
    try {
      const hotels = await Hotel.find({
        ...oth,
        cheapestPrice: { $gt: min | 200000, $lt: max || 999999999 },
      }).limit(req.query.limit);
      res.status(200).json({
        totalHotel: hotels.length,
        data: hotels,
      });
    } catch (error) {
      next(errorHandler(500, 'Hotel was not found'));
    }
  }

  static async get(req, res, next) {
    try {
      const hotel = await Hotel.findById(req.params.id);
      res.status(200).json(hotel);
    } catch (error) {
      next(errorHandler(404, 'Hotel was not found'));
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
      const hotelCount = await Hotel.countDocuments({
        type: 'hotel',
      });
      const villaCount = await Hotel.countDocuments({
        type: 'villa',
      });
      const resortCount = await Hotel.countDocuments({
        type: 'resort',
      });
      const apartmentCount = await Hotel.countDocuments({
        type: 'apartment',
      });

      res.status(200).json([
        { type: 'hotel', count: hotelCount },
        { type: 'villa', count: villaCount },
        { type: 'resort', count: resortCount },
        { type: 'apartment', count: apartmentCount },
      ]);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = HotelController;
