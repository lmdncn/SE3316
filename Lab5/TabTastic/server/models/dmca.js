var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DmcaSchema = new Schema({

    title: String,
    body: String,
    dateMade: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('Dmca', DmcaSchema);