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
var categoryApi = require('../api/categoryAPI');
var brandApi = require('../api/brandAPI');
var employerApi = require('../api/employerAPI');

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

/** product image api */
router.post('/api/v1/product-image', productImageApi.index);
// router.post('/api/v1/product-image/create', productImageApi.create);
// router.post('/api/v1/product-image/update', productImageApi.update);
// router.post('/api/v1/product-image/delete', productImageApi.delete);
// router.post('/api/v1/product-image/search', productImageApi.search);

/** category api */
router.post('/api/v1/category', categoryApi.index);
router.post('/api/v1/category/create', categoryApi.create);
router.post('/api/v1/category/update', categoryApi.update);
router.post('/api/v1/category/delete', categoryApi.delete);
router.post('/api/v1/category/search', categoryApi.search);

/** brand api */
router.post('/api/v1/brand', brandApi.index);
// router.post('/api/v1/brand/create', brandApi.create);
// router.post('/api/v1/brand/update', brandApi.update);
// router.post('/api/v1/brand/delete', brandApi.delete);
// router.post('/api/v1/brand/search', brandApi.search);

/** employer api */
router.post('/api/v1/employer', employerApi.index);
// router.post('/api/v1/brand/create', employerApi.create);
// router.post('/api/v1/brand/update', employerApi.update);
// router.post('/api/v1/brand/delete', employerApi.delete);
// router.post('/api/v1/brand/search', employerApi.search);

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