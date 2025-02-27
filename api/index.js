const express = require('express');
const serverless = require('serverless-http'); // Módulo necesario para serverless functions
const helmet = require('helmet');
const logger = require('morgan');
const createError = require('http-errors');

require('dotenv').config();

const app = express();
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());

const api = require('../config/routes.config'); // Ajusta la ruta si es necesario
app.use('/api/v1', api);

// Middleware de error
app.use((req, res, next) => next(createError(404, 'Route not found')));

app.use((error, req, res, next) => {
  if (!error.status) {
    error = createError(500, error);
  }

  res.status(error.status).json({ message: error.message });
});

// Exportamos el handler para Vercel
module.exports = app;
module.exports.handler = serverless(app);
