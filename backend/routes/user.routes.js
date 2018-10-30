var express = require('express');
var router = express.Router();
var service = require('../services/user.service.js');

router.get('/all', service.getAll);
router.get('/retrieve/:username',service.get);

router.delete('/delete/:username',service.delete);

router.post('/create',service.create);
router.post('/update',service.update);

module.exports = router;