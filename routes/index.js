/* package */
var express = require('express');
var router = express.Router();

/* controller */
var HomeController = require('../app/controller/HomeController');
var LoginController = require('../app/controller/LoginController');

/* GET home page. */
router.get('/', HomeController.index);

router.get('/login', LoginController.login);
router.post('/p-login', LoginController.p_login);

module.exports = router;