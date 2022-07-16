const mongoose = require('mongoose');

const FacilitiesSchema = new mongoose.Schema({
  swimmingPool: {
    type: Boolean,
    required: true,
  },
  fitnessCenter: {
    type: Boolean,
    required: true,
  },
  restaurant: {
    type: Boolean,
    required: true,
  },
  bar: {
    type: Boolean,
    required: true,
  },
  breakfast: {
    type: Boolean,
    required: true,
  },
  airportShuttle: {
    type: Boolean,
    required: true,
  },
  roomService: {
    type: Boolean,
    required: true,
  },
  spa: {
    type: Boolean,
    required: true,
  },
  nonSmokingRoom: {
    type: Boolean,
    required: true,
  },
  freeWifi: {
    type: Boolean,
    required: true,
  },
  freeParking: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('Facilities', FacilitiesSchema);
