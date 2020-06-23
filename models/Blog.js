const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BlogSchema = new Schema({
  blogtag: {
    type: String,
  },
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
  },
  author: {
    type: String,
  },
  picture: {
    name: {
      type: String
    },
    data: {
      type: String
    }
  }
});

module.exports = Blog = mongoose.model('Blog', BlogSchema);