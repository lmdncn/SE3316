var express = require('express');
var router = express.Router();



// Get Home Page


router.get('/',function(req,res,next){

    res.render('index.html');

});

router.get('/Home',function(req,res,next){

    res.render('index.html');

});

router.get('/TabView',function(req,res,next){

    res.render('index.html');

});

router.get('/SignUp',function(req,res,next){

    res.render('index.html');

});

router.get('/SignIn',function(req,res,next){

    res.render('index.html');

});

router.get('/AddTab',function(req,res,next){

    res.render('index.html');

});


router.get('/UserWelcome',function(req,res,next){

    res.render('index.html');

});


router.get('/ChordList',function(req,res,next){

    res.render('index.html');

});


module.exports = router;