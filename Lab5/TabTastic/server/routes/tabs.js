var express = require('express');
var router = express.Router();
var Tabs = require('../models/tab');
var sanitizer = require('sanitizer');
var Dmca = require('../models/dmca');
const jwt = require('express-jwt');

// Token Valid
const authCheck = jwt({
    secret: new Buffer('gPce_rvrT44vS-A81DesGEa5PUYOQdmssls9NiFyeYFu3VdZZDgxLal-MCRB-IKi', 'base64'),
    audience: 'yOHOPEsMPE4f5l5JbRFuMDOO188oxW9X'
});







router.get('/dmca', function (req, res, next) {

    console.log('getting dmcas');

    Dmca.find({}, function (err, dmcas) {

        if (err) {
            res.send(err);
        }

        res.json(dmcas);

    });

});


router.post('/dcma', authCheck, function (req, res, next) {


    console.log('posting dcma');

    let dmca = new Dmca({ 
        title: req.body.title,
        body: req.body.body
    });


    dmca.save(function (err) {
        if (err) {

            res.send(err);
        }

        res.json(201, dmca);
    });

});





router.post('/tabs', authCheck, function (req, res, next) {


    console.log('posting tab');

    let tab = new Tabs({ 
        song: req.body.song,
        artist: req.body.artist,
        desc: req.body.desc,
        author: req.body.author,
        authorId: req.body.authorId,
        tab: sanitizer.escape(req.body.tab),
        isPublic: req.body.isPublic
    });


    // console.log('made tab' + JSON.stringify(tab));

    tab.save(function (err) {
        if (err) {

            res.send(err);
        }

        res.json(201, tab);
    });

});

router.delete('/tabs', authCheck, function (req, res, next) {

    // console.log('Delete the tab with id ' + req.query.TabId);

    Tabs.remove({
        '_id': req.query.TabId,
        'authorId': req.query.UserId
    }, function (err) {
        if (err) {
            res.send(err)
        }
    });
});


router.put('/tabs', authCheck, function (req, res, next) {

    // console.log("Putting tab id of "+req.body._id)

    Tabs.findById(req.body._id, function (err, t) {
        if (!t)
            return next(new Error('Could not load Document'));
        else {
            // do your updates here
            t.song = req.body.song;
            t.artist = req.body.artist;
            t.desc = req.body.desc;
            t.tab = sanitizer.escape(req.body.tab);
            t.isPublic = req.body.isPublic;
            t.lastDayRevised = Date.now();
            t.version = t.version+1;

            t.save(function (err) {
                if (err)
                    console.log('error')
                else
                    console.log('success')
            });
        }
    });
});



router.get('/tabs', function (req, res, next) {

    // console.log('getting tabs');

    Tabs.find({
        'isPublic': true
    }, function (err, tabs) {

        if (err) {
            res.send(err);
        }

        // console.log(JSON.stringify(tabs));

        res.json(tabs);

    });

});

router.get('/tab', function (req, res, next) {

    console.log('getting tab with id '+ req.query.id);

    Tabs.find({
        '_id': req.query.id
    }, function (err, tabs) {

        if (err) {
            res.send(err);
        }

        // console.log(JSON.stringify(tab));

        res.json(tab);

    });

});

router.get('/tabs/myPrivate', authCheck, function (req, res, next) {

if(req.query.UserId == 'auth0|58434a38da0529cd293da79e')
{
     Tabs.find({
        'isPublic': false
    }, function (err, tabs) {

        if (err) {
            res.send(err);
        }

        // console.log(JSON.stringify(tabs));

        res.json(tabs);

    });

}
else{

 Tabs.find({
        'authorId': req.query.UserId,
        'isPublic': false
    }, function (err, tabs) {

        if (err) {
            res.send(err);
        }

        // console.log(JSON.stringify(tabs));

        res.json(tabs);

    });
}
   

});

router.get('/tabs/myPublic', authCheck, function (req, res, next) {

    Tabs.find({
        'authorId': req.query.UserId,
        'isPublic': true
    }, function (err, tabs) {

        if (err) {
            res.send(err);
        }

        // console.log(JSON.stringify(tabs));

        res.json(tabs);

    });

});






module.exports = router;