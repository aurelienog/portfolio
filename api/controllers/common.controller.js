const createError = require('http-errors');
const mailer = require('../config/mailer.config');

module.exports.home = ((req, res, next) => {
  res.status(200).send();
});

module.exports.mailer = ((req, res, next) => {
  console.log(req.body)
  mailer.sendMail(req.body);
  res.status(200).send();
})