const fs = require('fs')

const NODE_ENV = process.env.NODE_ENV

if (!NODE_ENV) {
  throw new Error('The NODE_ENV environment variable is required but was not specified.')
}

const dotenvFileName = '.env'

const dotenvFiles = [
  `${dotenvFileName}.${NODE_ENV}.local`,
  `${dotenvFileName}.${NODE_ENV}`,
  NODE_ENV !== 'test' && `${dotenvFileName}.local`,
  dotenvFileName,
].filter(Boolean)

dotenvFiles.forEach((dotenvFile) => {
  if (fs.existsSync(dotenvFile)) {
    require('dotenv').config({
      path: dotenvFile,
    })
  }
})

const APP = /^APP_/i

function getClientEnvironment() {
  const raw = Object.keys(process.env)
    .filter((key) => APP.test(key))
    .reduce(
      (env, key) => {
        env[key] = process.env[key]
        return env
      },
      {
        NODE_ENV: process.env.NODE_ENV,
      }
    )

  const stringified = {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key])
      return env
    }, {}),
  }

  return { raw, stringified }
}

module.exports = getClientEnvironment
