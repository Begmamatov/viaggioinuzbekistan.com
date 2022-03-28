const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport(
  {
    host: "smtp.yandex.ru",
    port: 465,
    auth: {
      user: "support@handmade.travel",
      pass: "ENkd-puK#em-szli!8@4f4r-rUBv!W0Yp",
    },
  },
  {
    from: "handmade.travel from site<support@handmade.travel>",
  }
);
const sendEmail = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    //    console.log('Email is sent', info)
  });
};
module.exports = sendEmail;
