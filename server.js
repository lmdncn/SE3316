//Server.js

//Base Set Up --------------------------------------------------------------

//call needed packages

var express = require('express'); //calls express

var app = express(); //define app using express

var bodyParser = require('body-parser');

var sanitizer = require('sanitizer');

//configure app to use bodyParser()
//this will let us get the data from a POST

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; //Set the port


var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/PostBlog'); //connect to the db

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





//This could be used to remove HTML tags
// var tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';
// var tagOrComment = new RegExp(
//     '<(?:'
//     // Comment body.
//     + '!--(?:(?:-*[^->])*--+|-?)'
//     // Special "raw text" elements whose content should be elided.
//     + '|script\\b' + tagBody + '>[\\s\\S]*?</script\\s*'
//     + '|style\\b' + tagBody + '>[\\s\\S]*?</style\\s*'
//     // Regular name
//     + '|/?[a-z]'
//     + tagBody
//     + ')>',
//     'gi');
// function removeTags(html) {
//   var oldHtml;
//   do {
//     oldHtml = html;
//     html = html.replace(tagOrComment, '');
//   } while (html !== oldHtml);
//   return html.replace(/</g, '&lt;');
// }






//post something (accessed at POSThttps://se33316a-lmdncn.c9users.io/api/home)
router.post('/List',function(req,res){
    
    console.log(req.body);
    
    var entry = new Entry(); //create new instance of the bear model
    
    //This removes HTML Tags, instead im using angular $validate
    // entry.alias = removeTags(req.body.alias); //set the entrys userName (coming from request)
    // entry.text = removeTags(req.body.text); //set the entrys post data
    // entry.date = Date(); //set the entrys date to current date time
    // entry.hashtag = removeTags(req.body.hashtag);
    
    
    
    //Sanitization using npm sanitize----------------------------------------------------------------------
    entry.alias = sanitizer.sanitize(req.body.alias); //set the entrys userName (coming from request)
    entry.text = sanitizer.sanitize(req.body.text); //set the entrys post data
    entry.date = Date(); //set the entrys date to current date time
    entry.hashtag = sanitizer.sanitize(req.body.hashtag);
    
    
    
    //save entry (checking for errors)
    
    entry.save(function(err){
        if(err){res.send(err);}
        
        res.json(entry); 
    });
    
    
});


router.get('/List',function (req,res){
    
    console.log('rec get req');
    
    Entry.find(function(err,entries){ 
        
        if(err){res.send(err);}
        
        res.json(entries);
        
    }).sort( { date: -1 } ).limit( 20 );
    
});


//routes that end in /bear/:bear_id ----------------------------

// router.route('/:entry_id')

// .get(function(req,res){
    
//     Entry.findById(req.params.entry_id,function(err,entry){
        
//         if(err){res.send(err);}
        
//         res.json(entry);
        
//     });
    
    
// })


// .put(function (req,res){ // Update(Edit) the posting
    
//      Entry.findById(req.params.entry_id,function(err,entry){
        
//         if(err){res.send(err);}
        
//         entry.text = req.body.text;
        
        
//         entry.save(function(err){
            
//             if (err){res.send(err);}
            
//             res.json({message:'Entry Edited!'});
            
//         });
        
//     });
    
    
// })

// .delete(function(req,res){
    
//     Entry.remove({
        
//         _id: req.params.entry_id},function (err,entry){
            
//             if(err){res.send(err);}
            
//             res.json({message:'Post successfully deleted!'});
            
//         });
    
// });



//Register routes ----------------------------------------------------
//all routes will be prefixed with /api
app.use('/api',router);


//Start the server -----------------------------------

app.listen(port);

console.log('Magic on port '+port);



