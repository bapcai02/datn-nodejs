/* package */
var express = require('express');
var router = express.Router();

/* controller */
var HomeController = require('../app/controller/HomeController');
var LoginController = require('../app/controller/LoginController');
var userApi = require('../api/userAPI');
var quanHuyenApi = require('../api/quanHuyenAPI');
var xaPhuongApi = require('../api/xaPhuongAPI');
var tinhTpApi = require('../api/tinhThanhPhoAPI');
var productApi = require('../api/productAPI');
var productImageApi = require('../api/productImageAPI');

/* GET home page. */
router.get('/', HomeController.index);

router.get('/login', LoginController.login);
router.post('/p-login', LoginController.p_login);

/** user api */
router.post('/api/v1/user', userApi.index);
router.post('/api/v1/user/create', userApi.create);
router.post('/api/v1/user/update', userApi.update);
router.post('/api/v1/user/delete', userApi.delete);
router.post('/api/v1/user/search', userApi.search);

/** product api */
router.post('/api/v1/product', productApi.index);
// router.post('/api/v1/product/create', productApi.create);
// router.post('/api/v1/product/update', productApi.update);
// router.post('/api/v1/product/delete', productApi.delete);
// router.post('/api/v1/product/search', productApi.search);

/** product api */
router.post('/api/v1/product-image', productImageApi.index);
// router.post('/api/v1/product/create', productApi.create);
// router.post('/api/v1/product/update', productApi.update);
// router.post('/api/v1/product/delete', productApi.delete);
// router.post('/api/v1/product/search', productApi.search);

/** quan huyen api */
router.post('/api/v1/quanhuyen', quanHuyenApi.index);
router.post('/api/v1/quanhuyen/create', quanHuyenApi.create);
router.post('/api/v1/quanhuyen/update', quanHuyenApi.update);
router.post('/api/v1/quanhuyen/delete', quanHuyenApi.delete);

/** xa phuong thi tran api */
router.post('/api/v1/xaphuong', xaPhuongApi.index);
router.post('/api/v1/xaphuong/create', xaPhuongApi.create);
router.post('/api/v1/xaphuong/update', xaPhuongApi.update);
router.post('/api/v1/xaphuong/delete', xaPhuongApi.delete);

/** xa phuong tinhtp api */
router.post('/api/v1/tinhtp', tinhTpApi.index);
router.post('/api/v1/tinhtp/create', tinhTpApi.create);
router.post('/api/v1/tinhtp/update', tinhTpApi.update);
router.post('/api/v1/tinhtp/delete', tinhTpApi.delete);
router.post('/api/v1/tinhtp/search', tinhTpApi.search);



module.exports = router;