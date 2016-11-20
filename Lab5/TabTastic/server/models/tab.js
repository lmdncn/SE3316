
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TabSchema = new Schema({
    
     song:String,artist:String,author:Number,tab:String
});

module.exports = mongoose.model('Tab',TabSchema);