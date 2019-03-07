var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/searchopdreceipt', function(req, res, next) {
    res.sendFile( __dirname + "../public/" + "index.html" );
});
module.exports = router;