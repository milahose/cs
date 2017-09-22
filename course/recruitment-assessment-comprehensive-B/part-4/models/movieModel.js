const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  rating: Number,
  category: String,
  awarded: Boolean,
  released: Date,
});

module.exports = mongoose.model('Movie', movieSchema);