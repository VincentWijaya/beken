const express = require('express')
const uuidv1 = require('uuid/v1')
const { log, constantCode } = require('../../../utils')

const router = express.Router()

router.get('/search', async (req, res) => {
  const threadId = uuidv1()
  const headers = req.headers
  const xid = headers.xid || threadId
  const body = req.body
  const logging = {
      title: 'request ' + req.url,
      xid: xid,
      content: {
          request: body,
          response: ''
      }
  }
  log.ts(xid, '', logging.title, logging.content.request)
  const response = {
    status: constantCode.ok,
    message: 'Success',
  }

  try {
    logging.content.response = response
    log.te(xid, logging.title, logging.content.response)
    return res.status(200).json(response)
  } catch (error) {
    response.responseCode = constantCode.error
    response.responseMessage = error.message
    logging.content.response = response
    log.te(xid, logging.title, logging.content.response)
    return res.status(200).json(response)
  }
})

module.exports = router