var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TabSchema = new Schema({

    song: String,
    artist: String,
    authorId: Number,
    tab: String,
    dateMade: {
        type: Date,
        default: Date.now
    },
    isPublic: {
        type: Boolean,
        default: true
    }




});

module.exports = mongoose.model('Tab', TabSchema);