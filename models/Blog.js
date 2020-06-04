const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
  },
    content: {
        type: String,
  },
    date: {
        type: Date,
        default: Date.now
  }
});

module.exports = Blog = mongoose.model('Blog', BlogSchema);