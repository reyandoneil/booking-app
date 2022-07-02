const route = require('express').Router();
const HotelController = require('../controller/HotelController');
const Hotel = require('../models/Hotel.js');
const authentication = require('../utils/authentication');

route.use(authentication);
//CREATE
route.post('/', HotelController.createHotel);
//UPDATE
route.put('/:id', HotelController.updateHotel);
//DELETE
route.delete('/:id', HotelController.deleteHotel);
//GET ALL
route.get('/', HotelController.getAll);
route.get('/countByCity', HotelController.countByCity);
route.get('/countByType', HotelController.countByType);

//GET by ID
route.get('/:id', HotelController.get);

module.exports = route;
