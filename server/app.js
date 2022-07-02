require('dotenv').config();
const route = require('./router');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Booking-Hotel App',
      version: '0.1.0',
      description:
        'This is a simple Booking-hotel app CRUD API application made with Express and documented with Swagger',
      // license: {
      //   name: 'MIT',
      //   url: 'https://spdx.org/licenses/MIT.html',
      // },
      // contact: {
      //   name: 'LogRocket',
      //   url: 'https://logrocket.com',
      //   email: 'info@email.com',
      // },
    },
    servers: [
      {
        url: 'http://localhost:3001/',
      },
    ],
  },
  apis: ['./router/*.js'],
};
const specs = swaggerJsdoc(options);


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected!');
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected!');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(route);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(PORT, () => {
  connect();
  console.log(`App Connected to PORT:${PORT}`);
});
