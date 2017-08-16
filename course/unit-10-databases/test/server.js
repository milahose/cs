var expect = require('chai').expect;
var request = require('request');


describe('SQL server', testSuite.bind(this, '../server-sql/server'));
describe('mongoose server', testSuite.bind(this, '../server-mongoose/server'));

function testSuite(path) {
  var server, id, start, end, length_all;
  before(function(done) {
    server = require(path);
    setTimeout(done, 2000);
  });

  it('"/events" should return an index of all the events', function(done) {
    var options = {
      url: 'http://localhost:8080/events',
      json: true
    };
    request(options, function(err, resp, body) {
      expect(err).to.not.exist;
      expect(resp.statusCode).to.eql(200);
      expect(resp.headers['content-type']).to.match(/json/);
      expect(body).to.be.a('array').and.have.length.above(10);
      expect(body[0]).to.be.a('object');
      expect(body[0].id).to.be.a('string').and.not.eql('');
      expect(body[0].htmlLink).to.be.a('string').and.not.eql('');
      expect(Date.parse(body[0].start)).to.not.eql(NaN);
      expect(Date.parse(body[0].end)).to.not.eql(NaN);
      id = body[0].id;
      start = body[2].start;
      end = body[5].end;
      length_all = body.length;
      done();
    });
  });

  it('"/events" should return all events where the sequence equals 0', function(done) {
    var options = {
      url: 'http://localhost:8080/events?sequence=0',
      json: true
    };
    request(options, function(err, resp, body) {
      expect(err).to.not.exist;
      expect(resp.statusCode).to.eql(200);
      expect(resp.headers['content-type']).to.match(/json/);
      expect(body).to.be.a('array').and.have.length.below(length_all);
      done();
    });
  });

  it('"/event/:id" should get the info for a specific event', function(done) {
    var options = {
      url: 'http://localhost:8080/event/' + id,
      json: true
    };
    // http://localhost:8080/event/nlb10474nrc6onbbcr162qlns0_20151224T013000Z
    request(options, function(err, resp, body) {
      expect(err).to.not.exist;
      expect(resp.statusCode).to.eql(200);
      expect(resp.headers['content-type']).to.match(/json/);
      expect(body.id).to.eql(id);
      done();
    });
  });
  
  it('should return a 404 status code if the event does not exist', function(done) {
    var options = {
      url: 'http://localhost:8080/event/this_should_definitelyyy_not_exist',
      json: true
    };
    // http://localhost:8080/event/nlb10474nrc6onbbcr162qlns0_20151224T013000Z
    request(options, function(err, resp, body) {
      expect(err).to.not.exist;
      expect(resp.statusCode).to.eql(404);
      done();
    });
  });

  after(function() {
    server.close();
  });
}
