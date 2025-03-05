require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
const helmet = require('helmet');

const app = express();

const cors = require('./config/cors.config');
app.use(cors);
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());

//TO DELETE, deploy test
app.get("/", (req, res) => {
  res.json("Holi")
});

const api = require('./config/routes.config');
app.use("/api/v1", api)
app.use((req, res, next) => next(createError(404, 'Route not found')));

app.use((req, res, next) => {
  if (!error.status) {
    error = createError(500, error);
  }

  const data = {
    message: error.message
  }

  res.status(error.status).json(data)
})

const port = 3000;
app.listen(port, () => console.info(`App is running at port ${port}`))

