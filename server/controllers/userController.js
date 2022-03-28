const User = require('../models/User');
const config = require('../config/config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
exports.register = async (req, res, next) => {
      let a = req.body.role
      const user = new User({
            name: req.body.name,
            password: req.body.password,
            surname: req.body.surname,
            email: req.body.email,
            role: a,
            phone: req.body.phone
      })
      switch (a) {
            case "admin":
                  user.role = 1
                  break;
            case "operator":
                  user.role = 2
                  break;
            case "user":
                  user.role = 3
                  break;
            default:
                  console.log('bunday qiymat yoq')
      }


      await user.save()
            .then(() => {
                  res.status(200).json({ success: true, data: user })
            })
            .catch((error) => {
                  res.status(500).json({
                        success: false, data: error
                  })
            })

}




exports.login = async (req, res, next) => {
      const { email, password } = req.body;


      if (!email || !password) {
            res.status(400).json({ success: false, data: 'Please provide email and password' })
      }
      const user = await User.findOne({ email: email }).select(['+password']);
      if (!user) {
            res.status(401).json({ success: false, data: 'Unauthorized' })
      }
      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
            res.status(401).json({ success: false, data: 'Invalid credentials' })
      }else{
            let payload = {subject: user._id}
            let token = jwt.sign(payload, config.JWT_SECRET)
            res.status(200).json({
                token
            })
        }

}


exports.getMe = async (req,res)=>{
      const token = req.headers.authorization
      const user =  jwt.decode(token)
      const me = await User.findOne({_id: user.subject})
          .select({password: 0})
      res.send(me)
  }
  




// PUT - /user/:id
exports.updateUser = async (req, res, next) => {
      const user = await User.findByIdAndUpdate({ _id: req.params.id });
      if (!user) {
            res.status(404).json({ success: false, data: 'Auth Not Found' })
      }

      user.name = req.body.name;
      user.surname = req.body.surname;
      user.email = req.body.email;
      user.phone = req.body.phone;
      await user
            .save()
            .then(() => { res.status(200).json({ success: true, data: user }) })
            .catch((error) => { res.status(400).json({ success: false, error: error }) })
}



// GET - /auth/me
exports.getMe = async (req, res, next) => {
      const token = req.headers.authorization
      const my = jwt.decode(token.slice(0, token.length))
      const user = await User.findById({ _id: my.id })
      res.status(200).json({ success: true, data: user });
}


exports.deleteUSer = async (req, res, next) => {
      await User.findByIdAndDelete({ _id: req.params.id })
      res.status(200).json({ success: true, data: [] })
}


