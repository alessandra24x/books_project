var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/nuevo', function(req, res, next) {
    res.sendFile(path.join(__dirname, '..', 'public', 'new.html'))
});

router.get('/listado', function(req, res, next) {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
});

module.exports = router;