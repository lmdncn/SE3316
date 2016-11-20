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

    }).limit(10);

});



router.post('/tabs', function (req, res) {

    console.log('made test tab');

    var tab = new Tabs();

    tab.song = "SongTest";
    tab.artist = "Artist Test";
    tab.authorId = 12312312;
    tab.tab = "Row Row [D]Row your boat";


    tab.save(function (err) {
        if (err) {
            res.send(err);
        }

        res.json(tab);
    });

});


module.exports = router;