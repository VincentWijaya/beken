const logger = require('./logger')
const loggertdr = require('./loggertdr')
const constant = require('./constant')
const mapMetadata = new Map

const ts = (threadId, tag, tagName, msg) => {
  const logTime = new Date()
  let messageLog = {
    tag: tag,
    tagName: tagName,
    metadata: threadId,
    logTime: logTime.toISOString(),
    datas: msg
  }

  logger.info(JSON.stringify(messageLog))
  messageLog.data = JSON.stringify(messageLog.datas)

  mapMetadata.set(threadId, logTime)
}

let te = (threadId, tag, tagName, msg) => {
  const logStartTime = mapMetadata.get(threadId)
  const logTime = new Date()
  const diff = Math.abs(logTime - logStartTime) // difference in milliseconds
  let messageLog = {
    tag: tag,
    tagName: tagName,
    metadata: threadId,
    logTime: logTime.toISOString(),
    responseTime: diff,
    datas: msg
  }

  logger.info(JSON.stringify(messageLog))
  messageLog.data = JSON.stringify(messageLog.datas)

  mapMetadata.delete(threadId)
}

module.exports = { ts, te }