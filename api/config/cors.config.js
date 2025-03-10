const cors = require('cors');

module.exports = cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  methods: ["POST", "GET"],
  credentials: true
})