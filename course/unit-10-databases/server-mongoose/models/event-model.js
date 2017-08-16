const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/mongodb-orm');

const eventSchema = new Schema({
  // define schema here
});


const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
