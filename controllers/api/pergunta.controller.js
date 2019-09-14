var config = require('config.json');
var express = require('express');
var router = express.Router();
var userService = require('services/user.service');

// routes
router.post('/saveQuestion', saveQuestion);

module.exports = router;

function saveQuestion(req, res) {
    console.log("saveQuestion11111");
    userService.question(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
