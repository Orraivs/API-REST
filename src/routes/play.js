const express = require('express');
const PlayCtrl = require('../controllers/playController');

const router = express.Router();

router.get('/:userID', PlayCtrl.getPlaylists)

module.exports = router;