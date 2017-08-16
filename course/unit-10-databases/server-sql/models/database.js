const pg = require('pg');

const db = {};
const uri = 'postgres://student:ilovetesting@localhost/postgresql-raw';

pg.connect(uri, (err, db_) => {
  if (err) throw new Error(err);
  db.conn = db_;
});

module.exports = db;
