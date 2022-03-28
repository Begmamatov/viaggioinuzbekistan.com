
const mongoose = require('mongoose');
const Contactchema = new mongoose.Schema({
    email:{
        type:String
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Contact', Contactchema);