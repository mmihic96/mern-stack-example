var express = require('express');
var router = express.Router();

router.use('/user', require('./user.routes.js'));

module.exports = router;