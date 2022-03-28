export default function (req, res) {
  require("dotenv").config();
  const {
    fullName,
    agencyName,
    agencyAdress,
    pasportNumber,
    phoneNumber,
    email,
    website,
    time,
  } = req.body;

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
    subject: `Modulo di registrazione:`,
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
          <h2><b>Modulo di registrazione:</b></h2>
            <h2>Nome, Cognome: <span>${fullName}</span></h2>
            <h2>Agenzia: <span>${agencyName}</span></h2>
            <h2>L’indirizzo dell’agenzia: <span>${agencyAdress}</span></h2>
            <h2>Numero di passaporto: <span>${pasportNumber}</span></h2>
            <h2>Telefono: <a href="tel:${phoneNumber}">${phoneNumber}</a></h2>
            <h2>E-mail: <a href="mailto:${email}">${email}</a></h2>
            <h2>Web site: <span>${website}</span></h2>
            <h2>Scegli la data di partenza: <span>${time}</span></h2>
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
