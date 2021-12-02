var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello world  !!' , message:'Welcome to Express Js Dummy App'});
});

module.exports = router;
