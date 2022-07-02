const route = require('express').Router();
const RoomController = require('../controller/RoomController');
const authentication = require('../utils/authentication');

route.use(authentication);
//CREATE
route.post('/:hotelId', RoomController.createRoom);
//UPDATE
route.put('/:id', RoomController.updateRoom);
//DELETE
route.delete('/:id/:hotelId', RoomController.deleteRoom);
//GET ALL
route.get('/', RoomController.getAll);
//GET by ID
route.get('/:id', RoomController.get);

module.exports = route;
