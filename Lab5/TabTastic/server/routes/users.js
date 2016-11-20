var express = require('express');
var router = express.Router();

// var mongo = require('mongodb');
// var assert = require('assert');

// var url = 'mongodb://localhost:27017/TabTastic';

// // Get User listing

// router.get('/',function(req,res,next){
    
//     res.render('index');

// });

// //Get login

// router.get("/login",function (req,res,next) {

//     var matchUser;

//     mongo.connect(url, function(err,db){
//     assert.equal(null,err);
//     var cursor = db.collection('user-data').find();

//     cursor.forEach(function(doc,err){
//         assert.equal(null,err);
//         if(doc.body.username == req.body.username){
//             matchUser = doc;
//             break;
//         }
//     },function(){
//         db.close();
//         res.render("index",{userItem:matchUser});
//     });

//     });




// });

// //Post login

// router.post("/login",function (req,res,next) {
    
//     var item = {
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password
//     }


//     mongo.connect(url, function(err,db){
//         assert.equal(null,err);
//         db.collection('user-data').insertOne(item,function(err,result){
//             assert.equal(null,err);
//             console.log("Item Inserted");
//             db.close();
//         })
//     });

// });


// //Post register

// router.post("/signup",function (req,res,next) {
    
// });

module.exports = router;