const express = require('express')
const router = express.Router()
const MongoClient = require('/mongodb');
const url = 'mongodb://localhost:27017';

router.get('/lotteryList', function (req, res, next) {
  MongoClient.connect(url, function (err, db) {
    const dbo = db.db("test");
    const sss = dbo.lottery_list.find();
  })
})
