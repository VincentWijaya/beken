const os = require('os')
const winston = require('winston')
const moment = require('moment-timezone')
require('winston-daily-rotate-file')
moment.tz.setDefault('Asia/Jakarta')

const constant = require('./constant')

const hostname = os.hostname()
const transport = new (winston.transports.DailyRotateFile)({
  dirname: constant.LOG_DIR,
  filename: constant.SERVICE_NAME.toUpperCase() + '_' + hostname + '_%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxFiles: '14d',
  level: 'info',
  timestamp: () => moment().format('YYYY-MM-DDTHH:mm:ss:SSSZ')
})
const logger = new (winston.Logger)({
  transports: [
    transport
  ]
})
module.exports = logger
