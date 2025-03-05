const createError = require('http-errors');
const mailer = require('../config/mailer.config');

module.exports.home = ((req, res, next) => {
  res.status(200).send();
});

module.exports.mailer = async (req, res, next) => {
  console.log(req.body);
  try {
    await mailer.sendMail(req.body);
    res.status(200).send({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ message: "Error sending email" });
  }
  
}