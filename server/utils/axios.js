const axios = require('axios')
const _ = require('lodash')
const constant = require('./constant')
const logger = require('./logger')

const instance = axios.create()
instance.defaults.timeout = constant.DEFAULT_TIMEOUT

instance.interceptors.request.use((config) => {
  let mirrorConfig = _.cloneDeep(config)
  const method = config.method

  mirrorConfig = {
    ...mirrorConfig,
    headers: {
      ...mirrorConfig.headers[method],
      xid: mirrorConfig.headers.xid
    }
  }

  logger.info(`${config.headers.xid} | REQUEST ${method.toUpperCase()} ${config.url}: ${JSON.stringify(mirrorConfig)}`)
  return config
})

instance.interceptors.response.use((response) => {
  let mirrorResponse = _.cloneDeep(response)
  
  mirrorResponse = {
    status: mirrorResponse.status,
    headers: mirrorResponse.headers,
    data: mirrorResponse.data
  }

  logger.info(`${response.config.headers.xid} | RESPONSE ${response.config.method.toUpperCase()} ${response.config.url}: ${JSON.stringify(mirrorResponse)}`)
  return response
})

module.exports = instance