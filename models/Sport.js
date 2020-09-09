const mongoose = require('mongoose');
const sportSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 250
    },

    description: {
        type: String,
        required: true,
        maxlength: 1000
    },

    authorname: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
    },
},{
        timestamps: true,
});

module.exports = mongoose.model('Sport', sportSchema);