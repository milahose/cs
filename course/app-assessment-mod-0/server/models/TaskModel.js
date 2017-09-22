const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const myURI = 'mongodb://localhost/todo';

// UNCOMMENT THE LINE BELOW IF USING MONGO
const URI = process.env.MONGO_URI || myURI;

mongoose.connect(URI);
mongoose.connection.once('open', () => {
  console.log('Connected to database!');
});

// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
// const URI = process.env.PG_URI || myURI;

const taskSchema = new Schema({
  item: String, 
  created_at: {type : Date, default: Date.now()}
});


module.exports = mongoose.model('Task', taskSchema); // <-- export your model
