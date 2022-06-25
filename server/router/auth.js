const route = require('express').Router();
const AuthController = require('../controller/AuthController');

route.post('/register', AuthController.register);
route.post('/login', AuthController.login);

module.exports = route;
