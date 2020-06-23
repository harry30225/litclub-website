const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ImagesliderSchema = new Schema({
    picture: {
        name: {
            type: String
        },
        data: {
            type: String
        }
    },
    title: {
        type: String,
    },
    caption: {
        type: String,
    },
});

module.exports = Imageslider = mongoose.model('Imageslider', ImagesliderSchema);