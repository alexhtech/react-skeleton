import express from 'express'
import webpack from 'webpack'
import path from 'path'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackDevMiddleware from 'webpack-dev-middleware'
import chalk from 'chalk'

import development from './config.development'

const app = express()
const compiler = webpack(development)

const APP_DEV_SERVER_PORT = 3000

const devMiddleware = webpackDevMiddleware(compiler, { publicPath: development.output?.publicPath })

app.use(devMiddleware)
app.use(webpackHotMiddleware(compiler, { heartbeat: 2000 }))

app.use('/', express.static('./public/'))

app.use('*', function (_req, res) {
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

devMiddleware.waitUntilValid(() => {
  console.log(chalk.green.bold(`Dev server is listening on port ${APP_DEV_SERVER_PORT}!`))
})

app.listen(APP_DEV_SERVER_PORT)
