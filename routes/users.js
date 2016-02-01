var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:apikey/contributions', function(req, res, next) {
  var sampleUserContributions = require('../samples/user-contributions.json');

  res.send(sampleUserContributions);
});

router.get('/:apikey/earnings', function(req, res, next) {
  var sampleEarnings = require('../samples/earnings.json');

  res.send(sampleEarnings);
});

module.exports = router;
