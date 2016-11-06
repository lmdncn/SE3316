//app/models/bear.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntrySchema = new Schema({
    
    alias:String, text:String , date:Date
});

module.exports = mongoose.model('Entry',EntrySchema);