const api = require('express').Router();
const common = require('../controllers/common.controller');

api.get("/", common.home);
api.post("/", common.mailer)

module.exports = api;