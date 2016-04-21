var express = require('express');
var router = express.Router();
var Validator = require('jsonschema').Validator;
var userSchema = require('../schemas/user.json');
var util = require('util');
var _ = require('lodash');

/* GET users listing. */
router.get('/:apikey/contributions', function (req, res, next) {
  var sampleUserContributions = require('../samples/user-contributions.json');

  res.send(sampleUserContributions);
});

router.get('/:apikey/earnings', function (req, res, next) {
  var sampleEarnings = require('../samples/earnings.json');

  res.send(sampleEarnings);
});

var existingEmails = [];

router.post('/', function (req, res, next) {
  var v = new Validator();

  var validationResult = v.validate(req.body, userSchema);

  if (!validationResult.valid) {
    res.status(400).json({
      error: 'Invalid data provided',
      code: 'some_code',
      reason: `Errors: ${validationResult.errors.join('; ')} Instance: ${util.inspect(validationResult.instance, {depth: null})}`
    });

    return;
  }

  var email = req.body.email;
  var password = req.body.password;

  if (existingEmails.indexOf(email) !== -1) {
    res.status(409).json({
      'error': 'A user account with this email already exists',
      'code': 'some_code',
      'reason': 'Account already exists'
    });
  }

  //Rotate this array. Max 5 emails.
  existingEmails.push(email);
  existingEmails = _.takeRight(existingEmails, 5);

  var token = new Buffer(email + ":" + password).toString("base64");

  res.status(201).json({
    "api_key": token
  });
});

module.exports = router;
