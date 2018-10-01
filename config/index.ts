function getConfig(): IConfig {
    const env = process.env.NODE_ENV || 'development'
    return require(`./config.${env}.json`)
}

const config: IConfig = getConfig()

interface IConfig {
    APP_API_BASE_URL?: string
    APP_PROXY_TARGET?: string
    APP_DEV_SERVER_PORT?: number
}

export default config
