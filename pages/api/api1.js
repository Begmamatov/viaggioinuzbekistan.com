export default function (req, res) {
  require("dotenv").config();
  const { fullName, phoneNumber } = req.body;

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport(
    {
      host: "smtp.mail.ru",
      port: 2525,
      auth: {
        user: "handmadetravel@mail.ru",
        pass: "D7HYJ8R0dCQeaE03G9ju",
      },
    },
    {
      from: "handmade.travel from site<handmadetravel@mail.ru>",
    }
  );
  const mailData = {
    to: "saidhon@silkroaddestinations.com",
    subject: `Bestellen Sie hier einen Anruf und wir werden Sie zurückrufen`,
    html: `
     <head>
          <style>
              .container {
                  font-family: sans-serif;
                  padding: 20px;
                  border: 1px solid #666;
                  border-radius: 4px;
                }
                .container h2 {
                  font-weight: 500;
                  color: #444;
                  font-size: 20px;
                }
                .container span,
                .container a {
                  color: #222;
                  transition: 400 ms;
                  padding-left: 20px;
                }
                .container a{
                  text-decoration: underline;
                }
              .container a:hover {
                  text-decoration: none;
                  transition: 400 ms;
                }
        </style>
     </head>
     <body>
          <div class="container">
          <h2<b>Bestellen Sie hier einen Anruf und wir werden Sie zurückrufen:</b></h2>
            <h2>Vor- und Nachname: <span>${fullName}</span></h2>
            <h2>Phone: <a href="tel:${phoneNumber}">${phoneNumber}</a></h2>
         </div>
     </body>
    `,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
  res.send("success").status(200);
}
