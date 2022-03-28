const Day_Map = require('../models/Days_map');
const path = require('path');
const fs = require('fs');

exports.createOne = async (req, res, next) => {

  const result = new Day_Map({
     image:`/public/uploads/org/${req.file.filename}`,
    tourID:req.body.tourID
  })
  await result.save()
  .then(() => {res.status(201).json({ success: true, data: result})})
  .catch((error) => {res.status(400).json({ success: false, error: error })})

}


exports.deleteOne=async (req,res)=>{
    await Day_Map.findById(req.params.id)
        .exec((error,data)=>{
            if(error){res.send(error)}
            else{
                const filePath=path.join(path.dirname(__dirname)+data.image)
                console.log(path.join(path.dirname(__dirname)+data.image))
                fs.unlink(filePath, async (err)=>{
                    if(err) throw err
                    await Day_Map.findByIdAndDelete(req.params.id)
                    res.status(200).json({
                        success:true,
                        data:"Success delete"
                    })
                })
            }
        })
}
