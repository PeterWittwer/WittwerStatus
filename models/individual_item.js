const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
  },

  address: {
    street: String,
    city: String,
    state: {
        type: String,
        uppercase: true,
    },
    zip: Number
  },


  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = IndividualItems = mongoose.model('individualItem', ItemSchema);








