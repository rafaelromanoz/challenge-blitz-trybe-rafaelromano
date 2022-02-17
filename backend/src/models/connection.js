/* eslint-disable arrow-body-style */
const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const mongodburl = 'mongodb://mongo:27017/';

let db = null;

const connection = () => {
  return db
    ? Promise.resolve(db)
    : MongoClient.connect(mongodburl, OPTIONS).then((conn) => {
      db = conn.db('blitz_challenge');
      return db;
    });
};

module.exports = connection;
