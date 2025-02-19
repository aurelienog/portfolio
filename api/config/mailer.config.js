const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASS
  }
});

module.exports.sendMail = (message) => {
  transporter
    .sendMail({
      from:`Aurelie <${process.env.EMAIL_FROM}>`,
      to:`${process.env.EMAIL_TO}`,
      subject:"New mail from portfolio",
      text:"test",
      html: `<h1>Test</h1><p>${message}</p>`
    })
    .then((info) => console.log(info))
    .catch((error) => console.log(error)); 
}