const express = require('express')
const router = express.Router()
const images_hotel_Ctrl = require('../controllers/images_hotel_Ctrl')
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



router.post('/add', upload.array('images',12), images_hotel_Ctrl.createOne);
router.delete('/:id',  images_hotel_Ctrl.deleteOne)

module.exports = router;