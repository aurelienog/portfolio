const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, 
  secure: false, 
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASS
  }
});

module.exports.sendMail = async (form) => {
  try {
    const info = await transporter
    .sendMail({
      from:`Aurelie <${process.env.EMAIL_FROM}>`,
      to:`${process.env.EMAIL_TO}`,
      subject:"New mail from portfolio",
      text:"test",
      html: `<h1>From: ${form.name}, ${form.email}</h1><p>${form.message}</p>`
    });
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  } 
}