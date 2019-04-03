var express = require('express');
var router = express.Router();
var ProductController=require('../controller/product_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('get request')
});

router.post('/create',ProductController.create);

router.get('/find', ProductController.find);

router.post('/getAllProductsOfSupplier',ProductController.getAllProductsOfSupplier);

router.post('/findByName', ProductController.findByName);


module.exports = router;