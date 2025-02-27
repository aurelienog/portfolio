const cors = require('cors');

const allowedOrigins = [
  'http://localhost:5173',
  'https://aurelie-nogueira.vercel.app'
];

module.exports = cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
});
