//Server.js

//Base Set Up --------------------------------------------------------------

//call needed packages

var express = require("express"); //calls express

var app = express(); //define app using express

var bodyParser = require("body-parser");


//configure app to use bodyParser()
//this will let us get the data from a POST

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; //Set the port


var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bears'); //connect to the db

var Bear = require('./app/models/bear');

//Routes for the API -----------------------------------------------------------

var router = express.Router();  //get instance of express router

//middleware to use for all requests

router.use(function(req,res,next){
    //do logging
    
    console.log('Something is happening');
    next(); //make sure we go to the nest routes and don't stop here
    
});




//test route to make sure everything is working (acceseed at GET Apllication https://se33316a-lmdncn.c9users.io)

router.get('/',function(req, res){
    
    res.json({message:'WELCOME TO THE API!!!'});
});

//more rouutes for api will go here


//on routes that en in /bears ------------------------------

router.route('/bears')

//create a bear (accessed at POSThttps://se33316a-lmdncn.c9users.io/api.bears)
.post(function(req,res){
    
    var bear = new Bear(); //create new instance of the bear model
    
    bear.name = req.body.name; //set the bears name (coming from request)
    
    //save bear (checking for errors)
    
    bear.save(function(err){
        if(err){res.send(err);}
        
        res.json({message:'Bear created!!'});
    });
    
    
})

.get(function(req,res){
    Bear.find(function(err,bears){
        
        if(err){res.send(err);}
        
        res.json(bears);
        
    });
    
});


//routes that end in /bear/:bear_id ----------------------------

router.route('/bears/:bear_id')

.get(function(req,res){
    
    Bear.findById(req.params.bear_id,function(err,bear){
        
        if(err){res.send(err);}
        
        res.json(bear);
        
    });
    
    
})


.put(function (req,res){
    
     Bear.findById(req.params.bear_id,function(err,bear){
        
        if(err){res.send(err);}
        
        bear.name = req.body.name;
        
        
        bear.save(function(err){
            
            if (err){res.send(err);}
            
            res.json({message:'Bear Updated!'});
            
        });
        
    });
    
    
})

.delete(function(req,res){
    
    Bear.remove({
        
        _id: req.params.bear_id},function (err,bear){
            
            if(err){res.send(err);}
            
            res.json({message:'Bear successfully deleted!'});
            
        });
    
});



//Register routes ----------------------------------------------------
//all routes will be prefixed with /api
app.use('/api',router);


//Start the server -----------------------------------

app.listen(port);

console.log("Magic on port "+port);



