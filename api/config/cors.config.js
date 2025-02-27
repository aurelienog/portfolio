const cors = require('cors');

module.exports.cors = cors({
  origin: process.env.CORS_ORIGIN
})