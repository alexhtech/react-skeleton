const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const path = require('path')
const webpackConfig = require('../webpack/webpack.config.development')

const app = express()
const compiler = webpack(webpackConfig)

const APP_DEV_SERVER_PORT = 3000

app.use(webpackDevMiddleware(compiler))
app.use(webpackHotMiddleware(compiler))

app.use('/static', express.static('./public/static'))

app.use('*', function (req, res) {
  let interval = setInterval(() => {
    compiler.outputFileSystem.readFile(path.join(compiler.outputPath, 'index.html'), function (err, file) {
      if (!err) {
        res.set('content-type', 'text/html')
        res.send(file)
        res.end()
        clearInterval(interval)
      }
    })
  }, 10)
})

app.listen(APP_DEV_SERVER_PORT, () => {
  console.log(`Page server is listening on port ${APP_DEV_SERVER_PORT}!`)
})
