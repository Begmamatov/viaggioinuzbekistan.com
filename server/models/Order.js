
const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({
    order_id:{
        type:String,
        required:true,
        unique:true
    },
    name_of_tour:{
        type:String
    },
    name_of_Date:{
        type:String
    },
    action:{
        type:String,
        required:true
    },
    travel_name:{
        type:String
    },
    number_of_travels:{
        type:String
    },
},{
    timestamps:true
})

module.exports = mongoose.model('Order', OrderSchema);

