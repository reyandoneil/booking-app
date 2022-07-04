const route = require('express').Router();
const HotelController = require('../controller/HotelController');
const authentication = require('../utils/authentication');

//SCHEMA HOTEL SWAGGER
/**
 * @swagger
 * components:
 *  schemas:
 *      hotels:
 *          type: object
 *          required:
 *              -name
 *              -type
 *              -city
 *              -address
 *              -distance
 *              -desc
 *              -title
 *              -cheapestPrice
 *          properties:
 *              id:
 *                  type: number
 *                  description: auto-generate id of the hotel 
 *              name:
 *                  type: string
 *                  description: hotel name
 *              type:
 *                  type: string
 *                  description: hotel type
 *              city:
 *                  type: string
 *                  description: city of hotel
 *              address:
 *                  type: string
 *                  description: address of hotel
 *              distance:
 *                  type: string
 *                  description: distance hotel
 *              desc:
 *                  type: string
 *                  description: description hotel
 *              title:
 *                  type: string
 *                  description: title hotel
 *              cheapestPrice:
 *                  type: number
 *                  description: the cheapest price of hotel
 *
 *
 */

/**
 * @swagger
 * tags:
 *  name: Hotels
 *  description: The Hotels API
 */

// route.use(authentication);
//CREATE
route.post('/', HotelController.createHotel);
//UPDATE
route.put('/:id', HotelController.updateHotel);
//DELETE
route.delete('/:id', HotelController.deleteHotel);
//GET ALL
/**
 * @swagger
 * /hotels:
 *  get:
 *      summary: Returns the list all of hotel
 *      tags: [Hotels]
 *      responses:
 *          200:
 *              description: The list of hotel
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/hotels'
 *                      example:
 *                          totalHotel: 2
 *                          data:
 *                          id: 62af10f7486d101c58003625
 * 
 */
route.get('/', HotelController.getAll);
route.get('/countByCity', HotelController.countByCity);
route.get('/countByType', HotelController.countByType);

//GET by ID
/**
 * @swagger
 * /hotels/{id}:
 *  get:
 *      summary: Returns hotel by id
 *      tags: [Hotels]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: The Hotel id
 *      responses:
 *          200:
 *              description: The hotel by id
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/hotels'
 *          400:
 *              description: The hotel was not found
 * 
 */
route.get('/:id', HotelController.get);

module.exports = route;
