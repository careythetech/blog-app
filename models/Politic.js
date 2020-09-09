const mongoose = require('mongoose');
const politicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 1000
    },

    description: {
        type: String,
        required: true,
        maxlength: 1000
    },

    authorname: {
        type:String,
        required: true,
        maxlength: 250
    },

    date: {
        type: Date,
        
    },
},{
        timestamps: true,
});

module.exports = mongoose.model('Politic', politicSchema);