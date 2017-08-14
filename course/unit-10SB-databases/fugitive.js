var pg = require('pg');
var conString = "postgres://" + process.env.USER + ":@localhost/world";
var Query = require('./query.js');

var Fugitive = {
  clue1: function(cb) {
    pg.connect(conString, function(err, client, done) {
      client.query(Query.query1, function(err, result) {
        client.end();
        cb(err, result.rows[0]);
      });
    });
  },
  clue2: function(cb) {
    pg.connect(conString, function(err, client, done) {
      client.query(Query.query2, function(err, result) {
        client.end();
        cb(err, result.rows[0]);
      });
    });
  },
  clue3: function(cb) {
    pg.connect(conString, function(err, client, done) {
      client.query(Query.query3, function(err, result) {
        client.end();
        cb(err, result.rows[0]);
      });
    });
  },
  clue4: function(cb) {
    pg.connect(conString, function(err, client, done) {
      client.query(Query.query4, function(err, result) {
        client.end();
        cb(err, result.rows[0]);
      });
    });
  },
  clue5: function(cb) {
    pg.connect(conString, function(err, client, done) {
      client.query(Query.query5, function(err, result) {
        client.end();
        cb(err, result.rows[0]);
      });
    });
  },
  clue6: function(cb) {
    pg.connect(conString, function(err, client, done) {
      client.query(Query.query6, function(err, result) {
        client.end();
        cb(err, result.rows[0]);
      });
    });
  },
  clue7: function(cb) {
    pg.connect(conString, function(err, client, done) {
      client.query(Query.query7, function(err, result) {
        client.end();
        cb(err, result.rows[0]);
      });
    });
  }
};
module.exports = Fugitive;
