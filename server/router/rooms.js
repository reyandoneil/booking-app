const route = require('express').Router();

route.get('/', (req, res) => {
  res.send('API Rooms live ');
});

module.exports = route;
