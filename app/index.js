const Koa = require('koa')
const mongoose = require('mongoose')
const bodyParser = require('koa-bodyparser')
const parameter = require('koa-parameter')
const routing = require('./routes')
const app = new Koa()

mongoose.connect('mongodb://localhost/zhihu', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.error('connect mongodb fail')
})
db.once('open', () => {
  console.log('connect mongodb success')
})

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    const { status, ...errMsg } = error
    ctx.status = status || 500
    ctx.body = errMsg
  }
})

app.use(bodyParser())
app.use(parameter(app))
routing(app)


const port = 3000
app.listen(port, () => {
  console.log(`app is running on locahost:${port}`)
}) 