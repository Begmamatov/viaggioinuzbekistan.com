const mongoose =require('mongoose');

const Images_hotelSchema = new mongoose.Schema({
    images:[{
        url:{type: String,
        required:true}
    }],
    tourID:{
        type: mongoose.Schema.ObjectId,
        ref: 'Tour',
        required: true
       }
},{
    timestamps:true 
})

module.exports= mongoose.model('Images_hotel', Images_hotelSchema);