//Server.js

//Base Set Up --------------------------------------------------------------

//call needed packages

var express = require('express'); //calls express

var app = express(); //define app using express

var bodyParser = require('body-parser');


//configure app to use bodyParser()
//this will let us get the data from a POST

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; //Set the port


var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bears'); //connect to the db

var Entry = require('./app/models/entry');

//Routes for the API -----------------------------------------------------------

var router = express.Router();  //get instance of express router

//middleware to use for all requests

router.use(function(req,res,next){
    //do logging
    
    console.log('Something is happening');
    next(); //make sure we go to the nest routes and don't stop here
    
});

    //Get static files
app.use(express.static(__dirname+'/public'));




//post something (accessed at POSThttps://se33316a-lmdncn.c9users.io/api/home)
router.post(function(req,res){
    
    var entry = new Entry(); //create new instance of the bear model
    
    entry.alias = req.body.userName; //set the entrys userName (coming from request)
    entry.text = req.body.post; //set the entrys post data
    entry.date = Date("<YYYY-mm-ddTHH:MM:ssZ>"); //set the entrys date to current date time
    
    
    //save entry (checking for errors)
    
    entry.save(function(err){
        if(err){res.send(err);}
        
        res.json({message:'Posted!'});
    });
    
    
})


router.get('/postList',function (req,res){
    
    console.log('rec get req');
    
    Entry.find(function(err,entries){
        
        if(err){res.send(err);}
        
        res.json(entries);
        
    });
    
    //  post1 = {
        
    //     alias: "kyle",
    //     text: "i love pineapple cus they are the best pen pineapple apple pen.",
    //     date: Date()
    // };
    // post2 = {
        
    //     alias: "billy",
    //     text: "This class is the best class ever. Omg i love everything, we are all so happy",
    //     date: Date()
        
    // };
    // post3 = {
        
    //     alias: "lovedove",
    //     text: "You guys are all the best everrrrr",
    //     date: Date()
        
    // };
    
    // var postList = [post1,post2,post3];
    
    // res.json(postList);
    
});


//routes that end in /bear/:bear_id ----------------------------

router.route('/:entry_id')

.get(function(req,res){
    
    Entry.findById(req.params.entry_id,function(err,entry){
        
        if(err){res.send(err);}
        
        res.json(entry);
        
    });
    
    
})


.put(function (req,res){ // Update(Edit) the posting
    
     Entry.findById(req.params.entry_id,function(err,entry){
        
        if(err){res.send(err);}
        
        entry.text = req.body.text;
        
        
        entry.save(function(err){
            
            if (err){res.send(err);}
            
            res.json({message:'Entry Edited!'});
            
        });
        
    });
    
    
})

.delete(function(req,res){
    
    Entry.remove({
        
        _id: req.params.entry_id},function (err,entry){
            
            if(err){res.send(err);}
            
            res.json({message:'Post successfully deleted!'});
            
        });
    
});



//Register routes ----------------------------------------------------
//all routes will be prefixed with /api
app.use('/api',router);


//Start the server -----------------------------------

app.listen(port);

console.log('Magic on port '+port);



