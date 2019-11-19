const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const routing = require('./routes')
const app = new Koa()

app.use(bodyParser())
routing(app)

const port = 3000
app.listen(port, () => {
  console.log(`app is running on locahost:${port}`)
}) 