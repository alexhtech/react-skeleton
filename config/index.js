function getConfig() {
    var env = process.env.NODE_ENV || 'development'
    return require('./config.' + env + '.json')
}

const config = getConfig()

module.exports = config
