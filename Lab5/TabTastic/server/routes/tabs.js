var express = require('express');
var router = express.Router();
var Tabs = require('../models/tab');
var sanitizer = require('sanitizer');

router.post('/tabs', function (req, res, next) {


    console.log('posting tab');

    let tab = new Tabs({

        song: sanitizer.santize(req.body.song),
        artist: sanitizer.sanitize(req.body.artist),
        desc: sanitizer.sanitize(req.body.desc),
        author: sanitizer.sanitize(req.body.author),
        authorId: sanitizer.sanitize(req.body.authorId),
        tab: sanitizer.sanitize(req.body.tab)
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