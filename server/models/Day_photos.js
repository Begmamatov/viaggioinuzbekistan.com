const mongoose =require('mongoose');

const day_PhotosSchema = new mongoose.Schema({
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

module.exports= mongoose.model('Day_photos', day_PhotosSchema);