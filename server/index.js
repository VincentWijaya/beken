process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
const { constant, logger } = require('./utils')
const app = require('./apps/app')
const port = constant.PORT || 3020

app.listen(port, () => {
  const message = constant.SERVICE_NAME.toUpperCase() + ' Service is started on port ' + port + ' !!!'

  logger.info(message)
  console.log(message)
})