
const models = require('../../db');
const express = require('express');
const router = express.Router();


// 获取已有账号接口
router.get('/api/login/getAccount',(req,res) => {
  console.log(req)
  //查找数据库
  models.Login.find((err,data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
    console.log(models)
  });
});

module.exports = router;
