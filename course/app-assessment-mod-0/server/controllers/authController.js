module.exports = {
  verifyUser(req, res, next) {
    console.log(req.body)
    if (req.body.user === 'codesmith' && req.body.pass === 'ilovetesting') {
      res.cookie('token', 'admin', { maxAge: 10000, httpOnly: true})
      next();
    } else {
      res.send('Unsuccessful login attempt');
    }
  },

  verifyCookie(req, res, next) {
    if(req.cookies.token && req.cookies.token === 'admin') {
      next();
    } else {
      res.status(400).send('You must be signed in to view this page');
    }
  }
};
