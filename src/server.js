const express = require('express')
const configViewEngine = require('./config/viewEngine.js')
const webRouter = require('./routers/web.js')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
//config static file: js,css,image,
//config templete engine
configViewEngine(app)
//router
app.use('/', webRouter)

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})