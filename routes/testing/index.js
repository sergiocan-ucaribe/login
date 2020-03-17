var express = require('express');
var router = express.Router();
const { test } = require('./controller');
/* GET home page. */
router.get('/', test);

module.exports = router;
