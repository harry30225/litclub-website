const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
  },
  description: {
    type: String,
  },
  eventdate: {
    type: Date,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  picture: {
    name: {
      type: String
    },
    data: {
      type: String
    }
  },
  formurl: {
    type: String
  },
});

module.exports = Event = mongoose.model("Event", EventSchema);
