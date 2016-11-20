var express = require('express');
var router = express.Router();


var Users = require('../models/user');

router.post('/signin', function (req, res, next) {

    console.log('attempting to sign in');

    //Does this Username exits

    //Is PAssword right


    //Log In if all good


});



router.post('/signup', function (req, res, next) {

    console.log('signing up');

    //Does User already exist

    //Does email already exist

    //All good then sign up


});


module.exports = router;