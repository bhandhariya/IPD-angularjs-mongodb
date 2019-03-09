var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('ok it is working')
});

router.post('/create', function(req, res, next) {
  console.log(req.body)
});


module.exports = router;
