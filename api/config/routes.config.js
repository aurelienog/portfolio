const api = require('express').Router();
const common = require('../controllers/common.controller');

api.get("/", common.home);

module.exports = api;