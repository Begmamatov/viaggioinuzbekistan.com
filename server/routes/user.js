const express = require('express');
const router= express.Router();
const {
    register,
    login,
    updateUser,
    getMe,
    deleteUSer
} = require('../controllers/userController');
const { protect, authorize } = require('../middleware/auth');

router.post('/add',   register);
router.post('/login', login);
router.get('/me', getMe);
router.delete('/:id', deleteUSer)
router.put('/:id', updateUser);

module.exports=router;



