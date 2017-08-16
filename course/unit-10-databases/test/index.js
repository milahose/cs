var expect = require('chai').expect;
var MongoClient = require('mongodb').MongoClient;
var pg = require('pg');

describe('mongodb-raw', function() {
  var events, db;
  before(function(done) {
    MongoClient.connect('mongodb://localhost/mongodb-raw', function(err, db_) {
      if (err) throw new Error(err);
      db = db_;
      events = db_.collection('events');
      done();
    });
  });

  it('should have records in the "events" collection', function(done) {
    events.count(function(err, num) {
      expect(err).to.not.exist;
      expect(num).to.be.above(10);
      done();
    });
  });

  it('should have the right string and number fields', function(done) {
    events.find().toArray(function(err, docs) {
      expect(err).to.not.exist;
      expect(docs).to.be.an('Array');
      var doc = docs[0];
      expect(doc.id).to.be.a('string');
      expect(doc.summary).to.be.a('string').and.not.eql('');
      expect(doc.htmlLink).to.be.a('string').and.not.eql('');
      expect(doc.sequence).to.be.a('number');
      done();
    });
  });

  it('should have the date-time fields', function(done) {
    events.find().toArray(function(err, docs) {
      expect(err).to.not.exist;
      var doc = docs[0];
      expect(doc.created).to.be.a('date');
      expect(doc.updated).to.be.a('date');
      expect(doc.start).to.be.a('date');
      expect(doc.end).to.be.a('date');
      done();
    });
  });

  after(function() {
    db.close();
  });
});

describe('mongodb-orm', function() {
  var events, db;
  before(function(done) {
    MongoClient.connect('mongodb://localhost/mongodb-orm', function(err, db_) {
      if (err) throw new Error(err);
      done();
      db = db_;
      events = db_.collection('events');
    });
  });

  it('should have records in the "events" collection', function(done) {
    events.count(function(err, num) {
      expect(err).to.not.exist;
      expect(num).to.be.above(10);
      done();
    });
  });

  it('should have the right string and number fields', function(done) {
    events.find().toArray(function(err, docs) {
      expect(err).to.not.exist;
      expect(docs).to.be.an('Array');
      var doc = docs[0];
      expect(doc.id).to.be.a('string');
      expect(doc.summary).to.be.a('string').and.not.eql('');
      expect(doc.htmlLink).to.be.a('string').and.not.eql('');
      expect(doc.sequence).to.be.a('number');
      done();
    });
  });

  it('should have the date-time fields', function(done) {
    events.find().toArray(function(err, docs) {
      expect(err).to.not.exist;
      var doc = docs[0];
      expect(doc.created).to.be.a('date');
      expect(doc.updated).to.be.a('date');
      expect(doc.start).to.be.a('date');
      expect(doc.end).to.be.a('date');
      done();
    });
  });

  after(function() {
    db.close();
  });
});

var types = {
  _id: /integer/i,
  id: /character/i,
  summary: /character/i,
  htmlLink: /character/i,
  start: /time/i,
  end: /time/i,
  createdAt: /time/i,
  updatedAt: /time/i,
  sequence: /integer/i
};

describe('postgresql-raw', function() {
  var db;
  before(function(done) {
    var uri = 'postgres://student:ilovetesting@localhost/postgresql-raw';
    pg.connect(uri, function(err, db_) {
      if (err) throw new Error(err);
      db = db_;
      done();
    });
  });

  it('should have "events" table', function(done) {
    var doesTableExist = `
      SELECT EXISTS (
         SELECT 1
         FROM   information_schema.tables
         WHERE  table_name = 'events'
      );
    `;
    db.query(doesTableExist, function(err, result) {
      expect(err).to.not.exist;
      expect(result.rows[0].exists).to.eql(true);
      done();
    });
  });

  it('events table should have correct columns', function(done) {
    var columnNames = `
      SELECT *
      FROM information_schema.columns
      WHERE table_name = 'events'
    `;
    db.query(columnNames, function(err, result) {
      expect(err).to.not.exist;
      expect(result.rows).to.have.length.above(0);
      var columnNames = result.rows.map(column => column.column_name);
      var schemaNames = Object.keys(types);
      // check the column names
      expect(columnNames).to.include.members(schemaNames);
      // check their types
      result.rows.forEach(function(column) {
        expect(column.column_name).to.be.a('string');
        if (types[column.column_name]) {
          expect(column.data_type).to.match(types[column.column_name]);
        }
      });
      done();
    });
  });

  it('events should be in the table ', function(done) {
    var eventCount = 'SELECT COUNT(*) FROM events;';
    db.query(eventCount, function(err, result) {
      expect(err).to.not.exist;
      expect(result.rows[0].count).to.be.above(10);
      done();
    });
  });

  it('should have the colums filled in', function(done) {
    var selectAll = 'SELECT * FROM events';
    db.query(selectAll, function(err, result) {
      expect(err).to.not.exist;
      var event = result.rows[2];
      expect(event.summary).to.be.a('string').and.not.eql('');
      expect(event.htmlLink).to.be.a('string').and.not.eql('');
      expect(event.id).to.be.a('string').and.not.eql('');
      expect(event.createdAt).to.be.a('date');
      expect(event.updatedAt).to.be.a('date');
      expect(event.start).to.be.a('date');
      expect(event.end).to.be.a('date');
      done();
    });
  });

  after(function() {
    db.end();
  });
});

describe('postgresql-orm', function() {
  var db;
  before(function(done) {
    var uri = 'postgres://student:ilovetesting@localhost/postgresql-orm';
    pg.connect(uri, function(err, db_) {
      if (err) throw new Error(err);
      db = db_;
      done();
    });
  });

  it('should have "events" table', function(done) {
    var doesTableExist = `
      SELECT EXISTS (
         SELECT 1
         FROM   information_schema.tables
         WHERE  table_name = 'events'
      );
    `;
    db.query(doesTableExist, function(err, result) {
      expect(err).to.not.exist;
      expect(result.rows[0].exists).to.eql(true);
      done();
    });
  });

  it('events table should have correct columns', function(done) {
    var columnNames = `
      SELECT *
      FROM information_schema.columns
      WHERE table_name = 'events'
    `;
    db.query(columnNames, function(err, result) {
      expect(err).to.not.exist;
      expect(result.rows).to.have.length.above(0);
      var columnNames = result.rows.map(column => column.column_name);
      var schemaNames = Object.keys(types);
      // check the column names
      expect(columnNames).to.include.members(schemaNames);
      // check their types
      result.rows.forEach(function(column) {
        expect(column.column_name).to.be.a('string');
        if (types[column.column_name]) {
          expect(column.data_type).to.match(types[column.column_name]);
        }
      });
      done();
    });
  });

  it('events should be in the table ', function(done) {
    var eventCount = 'SELECT COUNT(*) FROM events;';
    db.query(eventCount, function(err, result) {
      expect(err).to.not.exist;
      expect(result.rows[0].count).to.be.above(10);
      done();
    });
  });

  it('should have the colums filled in', function(done) {
    var selectAll = 'SELECT * FROM events';
    db.query(selectAll, function(err, result) {
      expect(err).to.not.exist;
      var event = result.rows[2];
      expect(event.summary).to.be.a('string').and.not.eql('');
      expect(event.htmlLink).to.be.a('string').and.not.eql('');
      expect(event.id).to.be.a('string').and.not.eql('');
      expect(event.createdAt).to.be.a('date');
      expect(event.updatedAt).to.be.a('date');
      expect(event.start).to.be.a('date');
      expect(event.end).to.be.a('date');
      done();
    });
  });

  after(function() {
    db.end();
  });
});
