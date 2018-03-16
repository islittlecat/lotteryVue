const MongoClient = require('mongodb').MongoClient;
const test = require('assert');
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db("test");
});

module.exports = MongoClient;
