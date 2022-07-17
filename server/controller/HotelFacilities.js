const Facilities = require('../models/Facilities');
const Hotel = require('../models/Facilities');

class FacilitiesController {
  static async addFacilities(req, res, next) {
    const hotelId = req.params.hotelId;
    const newFacilities = new Facilities(req.body);
    try {
      const saveFacilities = await newFacilities.save();
      try {
        await Hotel.findOneAndUpdate(hotelId, {
          $push: { facilities: saveFacilities._id },
        });
      } catch (error) {
        next(error)
      }
      res.status(200).json(saveFacilities)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

module.exports = FacilitiesController;
