var express = require('express');
var router = express.Router();
var CompanyController=require('../controller/company_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('this is Billing get request')
});


 router.post('/create',CompanyController.create);

// router.post('/billingAtDayEnd',BillingController.dayEndBilling);

// router.post('/getAllbilling',BillingController.getAllbilling);

// router.post('/billingbetweentwodays',BillingController.billingbetweentwodays);

// router.post('/searchbyBillId',BillingController.searchbyBillId);

// router.get('/getAllBillingTillToday',BillingController.getAllBillingTillToday);

// router.post('/searchbyBillName',BillingController.searchbyBillName);

module.exports = router;
