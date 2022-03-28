const Day_photos = require('../models/Day_photos');
const path = require('path');
const fs = require('fs');
const sharp = require('sharp')

exports.createOne = async (req, res, next) => {
    const files = req.files;
    let urls = [];
    let thumb=[]
    for(let i = 0; i < files.length; i++){
        const {filename} = files[i];
        await sharp(path.join(path.dirname(__dirname) + `/public/uploads/org/${filename}`) ).resize(450,600)
         .jpeg({
                quality: 60
            })
            .toFile(path.join(path.dirname(__dirname) + `/public/uploads/thumb/${filename}`), (err)=>{
                if(err) {
                    throw err
                }
                fs.unlink(path.join(path.dirname(__dirname) + `/public/uploads/org/${filename}`)  ,(error)=>{
                    if (error) {
                        throw error
                    }
                })
            })
        urls.push({
            url:`/public/uploads/thumb/${filename}`
        })
    }
  const result = new Day_photos({
     images:urls,
    tourID:req.body.tourID
  })
  await result.save()
  .then(() => {res.status(201).json({ success: true, data: result})})
  .catch((error) => {res.status(400).json({ success: false, error: error })})

}


exports.deleteOne=async (req,res)=>{
    await Day_photos.findById(req.params.id)
        .exec((error,data)=>{
            if(error){res.send(error)}
            else{
                const filePath=path.join(path.dirname(__dirname)+data.image)
                console.log(path.join(path.dirname(__dirname)+data.image))
                fs.unlink(filePath, async (err)=>{
                    if(err) throw err
                    await Day_photos.findByIdAndDelete(req.params.id)
                    res.status(200).json({
                        success:true,
                        data:"Success delete"
                    })
                })
            }
        })
}
