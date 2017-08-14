/*eslint-env node, mocha */

var Fugitive = require('../fugitive.js');
var expect = require('chai').expect;

describe('Fugitive', function() {
  it('Clue 1', function(done) {
    Fugitive.clue1(function(err, input) {
      if(err) {
        throw err;
      }
      expect(input).to.eql({code: "MDA", name: "Moldova"});
      done();
    });
  });
  it('Clue 2', function(done) {
    Fugitive.clue2(function(err, input) {
      if(err) {
        throw err;
      }
      expect(input).to.eql({isofficial: true, language: "Romanian"});
      done();
    });
  });
  it('Clue 3', function(done) {
    Fugitive.clue3(function(err, input) {
      if(err) {
        throw err;
      }
      expect(input).to.eql({ countrycode: "ROM", name: "Romania", percentage: 90.7});
      done();
    });
  });
  it('Clue 4', function(done) {
    Fugitive.clue4(function(err, input) {
      if(err) {
        throw err;
      }
      expect(input).to.eql({ name: "Resita"});
      done();
    });
  });
  it('Clue 5', function(done) {
    Fugitive.clue5(function(err, input) {
      if(err) {
        throw err;
      }
      expect(input).to.eql({ countrycode: "BRA", name: "Resende"});
      done();
    });
  });
  it('Clue 6', function(done) {
    Fugitive.clue6(function(err, input) {
      if(err) {
        throw err;
      }
      expect(input).to.eql({ name: "Brasília"});
      done();
    });
  });
  it('Clue 7', function(done) {
    Fugitive.clue7(function(err, input) {
      if(err) {
        throw err;
      }
      expect(input).to.eql({ name: "Santa Monica"});
      done();
    });
  });
});
