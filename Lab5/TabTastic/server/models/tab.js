var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TabSchema = new Schema({

    song: String,
    artist: String,
    desc: String,
    author: String,
    authorId: String,
    tab: String,
    dateMade: {
        type: Date,
        default: Date.now()
    },
    isPublic: {
        type: Boolean,
        default: true
    },
    lastDayRevised: {
        type: Date,
        default: Date.now()
    },




});

module.exports = mongoose.model('Tab', TabSchema);