const route = require('express').Router();
const authRouter = require('./auth');
const hotelsRouter = require('./hotels.js');
const roomsRouter = require('./rooms');
const usersRouter = require('./users');

route.use('/auth', authRouter)
route.use('/hotels', hotelsRouter)
route.use('/rooms', roomsRouter)
route.use('/users', usersRouter)


module.exports = route;
