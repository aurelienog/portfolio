const createError = require('http-errors');

module.exports.home = ((req, res, next) => {
  res.status(200).send();
});