const Contact = require("../models/Contact");
const sendEmail = require("../utils/sendEmail");
exports.createOne = async (req, res, next) => {
  const result = new Contact({
    email: req.body.email
  });
  const msg = {
    to: "russia@handmade.travel",
    subject: "Handmade.travel",
    html: `
      <h2 style="text-aligin:center"> Перезвоните пожалуйста клиенту <h2/>
      
      <div style="
      position: relative;
width: 100%;
height: auto;
padding: 15px;
position: relative;
background: #fff;
     " class="card">
 <div style=" position: relative;
display: flex;
column-gap: 20px;
align-items: center;" class="name">
     <div class="avatar">
         <img style=" width: 70px;
border-radius: 50%;" src="./user.png" alt="">
     </div>
 <div style="padding-left: 10px;" class="action">
     <ul>
         <li style=" font-size: 20px;
font-style: italic;">Email: ${result.data.email}</li>
     </ul>
 </div>
 
</div>

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
  const result = await Contact.findByIdAndUpdate(req.params.id);
  (result.email = req.body.email)
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
  await Contact.findByIdAndDelete({ _id: req.params.id });
  res.status(200).json([]);
};

exports.getItem = async (req, res, next) => {
  const result = await Contact.findById(req.params.id);
  res.status(200).json(result);
};
exports.getItems = async (req, res, next) => {
  const result = await Contact.find();
  res.status(200).json(result);
};
