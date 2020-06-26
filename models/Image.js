const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ImageSchema = new Schema({
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

module.exports = Image = mongoose.model('Image', ImageSchema);