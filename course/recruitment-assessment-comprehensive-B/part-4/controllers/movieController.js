const Movie = require('./../models/movieModel');

module.exports = {
  addMovie(req, res, next) {
    let newMovie = new Movie({
      title: req.body.title,
      rating: req.body.rating,
      category: req.body.category,
      awarded: req.body.awarded,
      released: req.body.released
    });

    newMovie.save((err, data) => {
      if (err) throw err;
      else res.json(data);
    });
    // next();
  },

  displayMovies(req, res, next) {
    Movie.find({}, (err, movies) => {
      if (err) throw err;
      res.send(movies);
    })
  }
};