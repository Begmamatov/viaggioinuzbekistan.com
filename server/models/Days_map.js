const mongoose =require('mongoose');

const day_MapSchema = new mongoose.Schema({
    image:{
        type: String,
        required:true
    },
    tourID:{
        type: mongoose.Schema.ObjectId,
        ref: 'Tour',
        required: true
       }
},{
    timestamps:true 
})

module.exports= mongoose.model('Day_Map', day_MapSchema);