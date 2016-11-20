

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntrySchema = new Schema({
    
    username:String, email:String , password:Date
});

module.exports = mongoose.model('Entry',EntrySchema);