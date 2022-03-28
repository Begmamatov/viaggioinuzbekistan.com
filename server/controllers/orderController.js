const Order = require('../models/Order');


exports.createOne = async (req, res, next) => {
    const result = new Order({
        order_id:code,
        name_of_tour:req.body.name_of_tour,
        name_of_Date:req.body.name_of_Date,
        action:req.body.action,
        travel_name:req.body.travel_name,
        number_of_travels:req.body.number_of_travels
    })
   await result.save() 
    .then(() => {
        res.status(200).json(result)
    })
    .catch((error) => {
        res.status(400).json({message: "Data is not created", data: error})
    })
}

exports.updateOne = async (req, res, next) => {
    const result = await Order.findByIdAndUpdate(req.params.id)
        result.name_of_tour=req.body.name_of_tour,
        result.name_of_Date=req.body.name_of_Date,
        result.action=req.body.action,
        result.travel_name=req.body.travel_name,
        result.number_of_travels=req.body.number_of_travels
    await result.save()
    .then(() => {
        res.status(200).json(result)
    })
    .catch((error) => {
        res.status(400).json({message: "Badly", data: error})
    })
}
exports.deleteOne = async (req, res, next) => {
    await Order.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json([])
}

exports.getItem = async (req, res,next ) => {
    const result = await Order.findById(req.params.id)
    res.status(200).json(result)
}
exports.getItems = async (req, res,next ) => {
    const result = await Order.find()
    res.status(200).json(result)
}