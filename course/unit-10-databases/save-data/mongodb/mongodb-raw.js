const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost/mongodb-raw', () => {
  console.log('Connected with MongoDB Raw - mongodb-raw');
});

module.exports = function(data) {
  //place code here
};
