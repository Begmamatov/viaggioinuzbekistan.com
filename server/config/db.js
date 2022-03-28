const mongoose=require('mongoose')
const dbUri = 'mongodb+srv://gulhayo:g5986173@cluster0.a2r9t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//  const dbUri='mongodb://localhost:27017/handmade'
const connectDB=async ()=>{
    const conn=await mongoose.connect(dbUri,{
        useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        useUnifiedTopology: true
    });
    console.log(`MongoDB Connected:${conn.connection.host}`);
};

module.exports=connectDB;