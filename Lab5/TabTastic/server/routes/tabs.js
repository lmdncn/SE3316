var express = require('express');
var router = express.Router();
var Tabs = require('../models/tab');
var sanitizer = require('sanitizer');

const jwt = require('express-jwt');

// Token Valid
const authCheck = jwt({
    secret: new Buffer('gPce_rvrT44vS-A81DesGEa5PUYOQdmssls9NiFyeYFu3VdZZDgxLal-MCRB-IKi', 'base64'),
    audience: 'yOHOPEsMPE4f5l5JbRFuMDOO188oxW9X'
});




router.post('/tabs', authCheck, function (req, res, next) {


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

    Tabs.find({
        'isPublic': true
    }, function (err, tabs) {

        if (err) {
            res.send(err);
        }

        console.log(JSON.stringify(tabs));

        res.json(tabs);

    });

});

router.get('/tabs/myPrivate', authCheck, function (req, res, next) {

    console.log('getting tabs');
    console.log(req.query.UserId);

    Tabs.find({
        'authorId': req.query.UserId,
        'isPublic': false
    }, function (err, tabs) {

        if (err) {
            res.send(err);
        }

        console.log(JSON.stringify(tabs));

        res.json(tabs);

    });

});

router.get('/tabs/myPublic', authCheck, function (req, res, next) {

    console.log('getting tabs');
    console.log(req.query.UserId);

    Tabs.find({
        'authorId': req.query.UserId,
        'isPublic': true
    }, function (err, tabs) {

        if (err) {
            res.send(err);
        }

        console.log(JSON.stringify(tabs));

        res.json(tabs);

    });

});






module.exports = router;