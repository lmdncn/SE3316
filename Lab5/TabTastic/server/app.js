// HTTP server using Express to handle incoming requests
var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan'); // helps log all requests

var cookieParser = require('cookie-parser'); // for handling cookies
var bodyParser = require('body-parser'); // for parsing request URL

var index = require('./routes/index');
var tabs = require('./routes/tabs');





var port = 8080;

// set up logger and parsers
app.use(logger('dev')); // set up logger and parsers


app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({
//     extended: false
// }));
app.use(cookieParser());


//View Engine

app.set('views', path.join(__dirname, '/../client/dist'));

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile)



// Static route for client-side code generated by Angular
app.use(express.static(path.join(__dirname, '/../client/dist')));



var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TabTastic'); //connect to the db


// AUTHENTICATION ======================================================================
const jwt = require('express-jwt');
const cors = require('cors');

app.use(cors());

// Token Valid
const authCheck = jwt({
  secret: new Buffer('YOUR-AUTH0-SECRET', 'base64'),
  audience: 'YOUR-AUTH0-CLIENT-ID'
});




//---------------------------------------------------------------------------------------


app.use('/', index);

app.use('/api', tabs);






// Function to handle client errors
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// start the server
app.listen(port, function () {
    console.log('Server listening on port ' + port + " !");
});























module.exports = app;