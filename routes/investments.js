var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    var sampleInvestments = require('../samples/investments.json');

    res.send(sampleInvestments);
});

router.get('/:id/notifications', function(req, res, next) {
    var sampleNotifications = require('../samples/notifications.json');

    res.send(sampleNotifications);
});

module.exports = router;
