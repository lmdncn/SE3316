var express = require('express');
var router = express.Router();

// Get User listing

router.get('/',function(req,res,next){
    
    res.send('respond with a resource');

});

//Get login

router.get("/login",function (req,res,next) {
    res.render('users/login');
});

//Post login

router.post("/login",function (req,res,next) {
    
});

//Get register

router.get("/signup",function (req,res,next) {
    
});

//Post register

router.post("/signup",function (req,res,next) {
    
});

module.exports = router;