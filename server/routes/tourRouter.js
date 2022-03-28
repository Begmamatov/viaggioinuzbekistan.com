const express = require('express');
const router = express.Router()
const {createOne, getItem, getItems, updateOne, deleteOne} = require('../controllers/tourCntroller')
const multer = require('multer');
const md5 = require('md5');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, './public/uploads/org');
    },
    filename: function (req,file,cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`);
    }
});
const upload = multer({storage: storage});

router.post('/', upload.array('photos',12), createOne)
router.get('/all',getItems)
router.get('/:id',getItem)
router.put('/:id',updateOne)
router.delete('/:id',deleteOne)



module.exports = router 