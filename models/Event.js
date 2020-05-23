const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EventSchema = new Schema({
    name: {
        type: String,
        required: true
  },
    venue: {
        type: String,
  },
    date: {
        type: Date,
        default: Date.now
  },
  description: {
    type: String,
  },

});

module.exports = Event = mongoose.model('Event', EventSchema);