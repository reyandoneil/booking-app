const route = require('express').Router();
const UserController = require('../controller/UserController');
const authentication = require('../utils/authentication');

//GET ALL
route.get('/', UserController.getAll);
route.use(authentication);
//CREATE
route.post('/:hotelId', UserController.updateUser);
//UPDATE
route.put('/:id', UserController.updateUser);
//DELETE
route.delete('/:id', UserController.deleteUser);

module.exports = route;
