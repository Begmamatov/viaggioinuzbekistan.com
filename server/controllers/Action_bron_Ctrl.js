const Action_bron = require("../models/Action_bron");
const sendEmail = require("../utils/sendEmail");
exports.createOne = async (req, res, next) => {
  const result = new Action_bron({
    data: {
      name: req.body.name,
      agent: req.body.agent,
      location: req.body.location,
      pasport: req.body.pasport,
      phone: req.body.phone,
      email: req.body.email,
      website: req.body.website,
      date: req.body.date,
    },
  });
  const msg = {
    to: "saidhon@silkroaddestinations.com",
    // to: "abjalilovdiyor@gmail.com",
    subject: "Modulo di registrazione:",
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
            <h2>Nome, Cognome: <span>${result.data.name}</span></h2>
            <h2>Agenzia: <span>${result.data.agent}</span></h2>
            <h2>L’indirizzo dell’agenzia: <span>${result.data.location}</span></h2>
            <h2>Numero di passaporto: <span>${result.data.pasport}</span></h2>
            <h2>Telefono: <a href="tel:${result.data.phone}">${result.data.phone}</a></h2>
            <h2>E-mail: <a href="mailto:${result.data.email}">${result.data.email}</a></h2>
            <h2>Web site: <span>${result.data.website}</span></h2>
            <h2>Scegli la data di partenza: <span>${result.data.date}</span></h2>
            </div>
     </body>
    `,
  };
  try {
    await sendEmail(msg);
    //   res.status(200).json({ success: true, data: 'Email is sent' });
    await result
      .save()
      .then(() => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(400).json({ message: "Data is not created", data: error });
      });
  } catch (err) {
    console.log(err);
  }
};

exports.updateOne = async (req, res, next) => {
  const result = await Action_bron.findByIdAndUpdate(req.params.id);
  (result.data.name = req.body.name),
    (result.data.phone = req.body.phone),
    (result.email = req.body.email),
    await result
      .save()
      .then(() => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(400).json({ message: "Badly", data: error });
      });
};
exports.deleteOne = async (req, res, next) => {
  await Action_bron.findByIdAndDelete({ _id: req.params.id });
  res.status(200).json([]);
};

exports.getItem = async (req, res, next) => {
  const result = await Action_bron.findById(req.params.id);
  res.status(200).json(result);
};
exports.getItems = async (req, res, next) => {
  const result = await Action_bron.find();
  res.status(200).json(result);
};
