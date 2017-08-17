const User = require('./userModel');
const cookieController = require('./../util/cookieController');
const sessionController = require('./../session/sessionController');

const userController = {};

/**
* getAllUsers
*
* @param next - Callback Function w signature (err, users)
*/
userController.getAllUsers = (next) => {
  User.find({}, next);
};

/**
* createUser - create a new User model and then save the user to the database.
*
* @param req - http.IncomingRequest
* @param res - http.ServerResponse
*/
userController.createUser = (req, res) => {
  // write code here

  if (!req.body.username || !req.body.password) {
  	res.render('signup', {error: 'error'});
  } else {
  	let newUser = new User({
  		username: req.body.username, 
  		password: req.body.password
  	});

  	newUser.save(function(err) {
  		if (err) {
  			throw err;
  		}
  	})

  	res.end();
  }
};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*
* @param req - http.IncomingRequest
* @param res - http.ServerResponse
*/
userController.verifyUser = (req, res) => {
  // write code here
	User.findOne({username: req.body.username}, function(err, users){
		if (err) throw err;

    if (users === null) {
    	res.redirect('/signup');
    } else if (users.password === req.body.password){
    	res.redirect('/secret');
    } else {
    	res.redirect('/signup');	
    }
  }); 
};

module.exports = userController;


