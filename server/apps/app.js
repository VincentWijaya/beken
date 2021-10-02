const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const { constant, logger } = require('../utils')

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

app.use((req, res, next) => {
    const start = process.hrtime()
    var send = res.send
    let threadId = uuidv1()
    let xid = req.headers.xid || threadId
    req.headers.xid = xid

    if (req.path == '/' + constanta.VERSION_URL) {
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
      
      loggertdr.info(messageLog)
      send.call(this, resp)
    }
    
    next()
  }
)

module.exports = app