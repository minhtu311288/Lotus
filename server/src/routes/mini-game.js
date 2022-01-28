const express = require('express');
const router = express.Router();
const miniGameController = require('../app/controller/MiniGameController');

router.get('/', miniGameController.index);
router.post('/', miniGameController.send);

module.exports = router;