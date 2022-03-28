const Action_pdf = require("../models/Action_pdf");
const sendEmail = require("../utils/sendEmail");
exports.createOne = async (req, res, next) => {
  const result = new Action_pdf({
    data: {
      name: req.body.name,
      email: req.body.email,
    },
  });
  const msg = {
    to: "saidhon@silkroaddestinations.com",
    // to: "abjalilovdiyor@gmail.com",
    subject: "Handmade.travel",
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
          <h2><b>Bestellen Sie hier einen Anruf und wir werden Sie zurückrufen:</b></h2>
            <h2>Vor- und Nachname: <span>${result.data.name}</span></h2>
            <h2>E-mail: <a href="malto:${result.data.email}">${result.data.email}</a></h2>
         </div>
     </body>`,
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
  const result = await Action_pdf.findByIdAndUpdate(req.params.id);
  (result.action_id = req.body.action_id),
    (result.tourID = req.body.tourID),
    (result.data.name = req.body.name),
    (result.data.phone = req.body.phone);
  (result.data.date = req.body.date), (result.data.time = req.body.time);
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
  await Action_pdf.findByIdAndDelete({ _id: req.params.id });
  res.status(200).json([]);
};

exports.getItem = async (req, res, next) => {
  const result = await Action_pdf.findById(req.params.id);
  res.status(200).json(result);
};
exports.getItems = async (req, res, next) => {
  const result = await Action_pdf.find();
  res.status(200).json(result);
};
