function getConfig(): Config {
  const env = process.env.NODE_ENV || 'development'
  return require(`./config.${env}.json`)
}

const config: Config = getConfig()

interface Config {
  APP_API_URL: string
}

export default config
