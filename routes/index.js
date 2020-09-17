var express = require('express');
var router = express.Router();

const description = 'This is a Flask app that will eventually be modified to return account management info.'

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Account Management Service', description:  description});
});

module.exports = router;
