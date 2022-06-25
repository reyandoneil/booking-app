require('dotenv').config();
const route = require('./router');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
const cors = require('cors');
const cookieParser = require('cookie-parser')


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

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
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
