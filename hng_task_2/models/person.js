const { Schema, model } = require('mongoose');

const personSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

exports.Person = model('Person', personSchema);