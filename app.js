const express = require('express')

const env = process.env.NODE_ENV || 'development'

const app = express()
const apiRoutes = express.Router();
const api = require('./server/api/lottery')


app.use('/api', apiRoutes);
app.use(api)

if (env !== 'development') {
  app.use(express.static('./dist'))
}

// 错误处理
app.use((err, req, res, next) => {
  res.status(442).send({error: err.message})
})

app.listen(4000, () => {
  console.log(`Express started in ${app.get('env')} mode on http://localhsot:4000`)
})


const mongoose = require('mongoose');
