const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(logger('dev'));



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

