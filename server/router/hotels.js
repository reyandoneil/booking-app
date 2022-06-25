const route = require('express').Router();
const HotelController = require('../controller/HotelController');
const Hotel = require('../models/Hotel.js');

//CREATE
route.post('/', HotelController.createHotel);
//UPDATE
route.put('/:id', HotelController.updateHotel);
//DELETE
route.delete('/:id', HotelController.deleteHotel);
//GET ALL
route.get('/', HotelController.getAll);
//GET by ID
route.get('/:id', HotelController.get);

module.exports = route;
