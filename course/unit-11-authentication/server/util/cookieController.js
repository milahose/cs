const sessionController = require('./../session/sessionController');

const cookieController = {};
cookieController.setCookie = setCookie;
cookieController.setSSIDCookie = setSSIDCookie;

/**
* setCookie - set a cookie with a random number
*
* @param req - http.IncomingRequest
* @param res - http.ServerResponse
* @param next - Callback with signature ([err])
*/
	
function setCookie(req, res, next) {
  //write code here

  res.cookie('codesmith', 'hi', {httpOnly: false});
  res.cookie('secret', Math.floor(Math.random() * 99));

  next();
}

/**
* setSSIDCookie - store the supplied id in a cookie
*
* @param req - http.IncomingRequest
* @param res - http.ServerResponse
* @param next - Callback with signature ([err])
*/
function setSSIDCookie(req, res, next) {
  // write code here

}

module.exports = cookieController;
