const route = require('express').Router();
const authentication = require('../utils/authentication');
const { addFacilities } = require('../controller/HotelFacilities');

// route.use(authentication);
//CREATE
route.post('/:hotelId', addFacilities);

module.exports = route;
