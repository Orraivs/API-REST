const express = require('express');
const authCtrl = require('../controllers/authController');
const router = express.Router();

router.post('/signin', authCtrl.find, authCtrl.signin);
router.post('/verify', authCtrl.verifyToken);
module.exports = router;