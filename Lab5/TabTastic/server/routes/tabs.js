var express = require('express');
var router = express.Router();
var Tabs = require('../models/tab');


router.post('/tabs', function (req, res, next) {


    console.log('posting tab');

    let tab = new Tabs({

        song: req.body.song,
        artist: req.body.artist,
        desc: req.body.desc,
        author: req.body.author,
        authorId: req.body.authorId,
        tab: req.body.tab
    });


    console.log('made tab' + JSON.stringify(tab));

    tab.save(function (err) {
        if (err) {
            res.send(err);
        }

        res.json(201, tab);
    });

});


router.get('/tabs', function (req, res, next) {

    console.log('getting tabs');

    Tabs.find({}, function (err, tabs) {

        if (err) {
            res.send(err);
        }

        console.log(JSON.stringify(tabs));

        res.json(tabs);

    });

});








module.exports = router;