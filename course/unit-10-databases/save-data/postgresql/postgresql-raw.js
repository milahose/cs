const pg = require('pg');
const uri = 'postgres://student:ilovetesting@localhost/postgresql-raw';

pg.connect(uri, (err, db) => {
  if (err) throw new Error(err);

  // make SQL queries
  db.query('SELECT NOW() AS "theTime";', (err, result) => {
    console.log(result.rows);

    // close database connection
    db.end();
  });

});

module.exports = function(data) {
  //place code here
};
