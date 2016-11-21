var express = require('express');
var router = express.Router();

var Tabs = require('../models/tab');

router.get('/tabs', function (req, res, next) {

    console.log('getting tabs');

    Tabs.find(function (err, tabs) {

        if (err) {
            res.send(err);
        }

        res.json(tabs);

    });

});



router.post('/tabs', function (req, res) {

    console.log('made test tab');

    var tab = new Tabs();

    tab.song = req.song;
    tab.artist = req.artist;
    tab.authorId = req.authorId;
    tab.tab = req.tab;


    tab.save(function (err) {
        if (err) {
            res.send(err);
        }

        res.json(tab);
    });

});


module.exports = router;