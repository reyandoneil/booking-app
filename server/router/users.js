const route = require('express').Router();

route.get('/', (req, res) => {
  res.send('API User Live ');
});

module.exports = route;
