var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:apikey/investments', function(req, res, next) {
  var sampleUserInvestments = require('../samples/user-investments.json');

  res.send(sampleUserInvestments);
});

router.get('/:apikey/earnings', function(req, res, next) {
  var sampleEarnings = require('../samples/earnings.json');

  res.send(sampleEarnings);
});

module.exports = router;
