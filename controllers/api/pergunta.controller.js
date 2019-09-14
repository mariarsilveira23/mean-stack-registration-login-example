var config = require('config.json');
var express = require('express');
var router = express.Router();
var userService = require('services/user.service');

// routes
router.post('/saveQuestion', saveQuestion);
router.get('/getPerguntas', getPerguntas);
router.post('/excluiPergunta', excluiPergunta);

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

function getPerguntas(req, res) {
    console.log("capturando perguntas...");
    userService.getPerguntas().then(function (questions) {
            if (questions) {
                res.send(questions);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}


function excluiPergunta(req, res) {
    console.log("excluiPergunta333:: " + req.key);
    userService.excluiPergunta(req.params)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}