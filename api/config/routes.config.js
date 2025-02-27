const api = require('express').Router();
const common = require('../controllers/common.controller');


api.post("/", common.mailer)

module.exports = api;