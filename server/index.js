'use-strict';

process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');
const webpackConfig = require('../config/webpack.config.development');

const { APP_DEV_SERVER_PORT = 3000 } = {};

const app = express();
const compiler = webpack(webpackConfig);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    stats: {
      colors: true,
      children: false
    },
    noInfo: true
  })
);
app.use(webpackHotMiddleware(compiler));

app.use('/static', express.static('./public/static'));

app.use('*', function(req, res) {
  const interval = setInterval(() => {
    compiler.outputFileSystem.readFile(
      path.join(compiler.outputPath, 'index.html'),
      function(err, file) {
        if (!err) {
          res.set('content-type', 'text/html');
          res.send(file);
          res.end();
          clearInterval(interval);
        }
      }
    );
  }, 10);
});

app.listen(APP_DEV_SERVER_PORT, () => {
  console.log(`\n Page server is listening on port ${APP_DEV_SERVER_PORT}!`);
});
