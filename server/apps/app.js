const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const uuidv1 = require('uuid/v1')
const { constant, logger, loggerTDR } = require('../utils')
const { logRequestToDB } = require('./middleware')

const { movie } = require('./routes/v1')

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ limit: '10mb', extended: true }))
app.use(express.json({ limit: '10mb' }))
app.use(cookieParser())
app.use(cors())

app.use(function (req, res, next) {
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  logger.info('Client IP:', ip)
  req.setMaxListeners(0)
  req.getUrl = function () {
    return req.protocol + "://" + req.get('host') + req.originalUrl
  }
  logger.info('path = ' + req.protocol + "://" + req.get('host') + req.originalUrl)
  res.header('Cache-Control', 'private, max-age=0, no-cache, no-store')
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

  return next()
})

app.get('/' + constant.VERSION_URL, (req, res) => {
  res.send(constant.SERVICE_NAME.toUpperCase() + ' Service ' + constant.VERSION_URL.toUpperCase() + '.00')
})

const getActualRequestDurationInMilliseconds = start => {
  const NS_PER_SEC = 1e9 //  convert to nanoseconds
  const NS_TO_MS = 1e6 // convert to milliseconds
  const diff = process.hrtime(start)
  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS
}

app.use((req, res, next) => {
    const start = process.hrtime()
    const send = res.send
    const threadId = uuidv1()
    const xid = req.headers.xid || threadId
    req.headers.xid = xid

    if (req.path == '/' + constant.VERSION_URL) {
      return next()
    }

    res.send = function (string) {
      const durationInMilliseconds = getActualRequestDurationInMilliseconds(start)
      resp = string instanceof Buffer ? string.toString() : string
      const messageLog = {
        xid: xid,
        rt: parseInt(durationInMilliseconds.toFixed()),
        port: process.env.PORT || 3020,
        ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        app: 'beken',
        ver: constant.VERSION_URL,
        path: req.originalUrl,
        header: req.headers,
        req: req.body,
        resp: JSON.parse(resp),
      }
      
      loggerTDR.info(JSON.stringify(messageLog))
      send.call(this, resp)
    }
    
    next()
  }
)

app.use('/' + constant.VERSION_URL + '/movie', logRequestToDB, movie)

module.exports = app