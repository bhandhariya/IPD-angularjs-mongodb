var express = require('express');
var router = express.Router();
var SupplierController=require('../controller/supplier_controller');

/* GET home page. */
router.post('/createSupplier',SupplierController.createSupplier);

router.get('/findAll',SupplierController.findAllSuppliers)

module.exports = router;