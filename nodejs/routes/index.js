/* package */
var express = require('express');
var router = express.Router();

/* controller */
var HomeController = require('../app/controller/HomeController');
var LoginController = require('../app/controller/LoginController');
var userApi = require('../api/userAPI');

/* GET home page. */
router.get('/', HomeController.index);

router.get('/login', LoginController.login);
router.post('/p-login', LoginController.p_login);

/** user api */
router.post('/api/v1/user', userApi.index);
router.post('/api/v1/user/create', userApi.create);
router.post('/api/v1/user/update', userApi.update);
router.post('/api/v1/user/delete', userApi.delete);

module.exports = router;