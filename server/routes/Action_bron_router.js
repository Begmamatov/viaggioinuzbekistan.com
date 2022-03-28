const express = require('express');
const router = express.Router()
const {createOne, getItem, getItems, updateOne, deleteOne} = require('../controllers/Action_bron_Ctrl')

router.post('/', createOne)
router.get('/all',getItems)
router.get('/:id',getItem)
router.put('/:id',updateOne)
router.delete('/:id',deleteOne)


module.exports = router 