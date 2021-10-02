const express = require('express')
const uuidv1 = require('uuid/v1')
const { log, constantCode } = require('../../../utils')
const { omdb } = require('../../service')

const router = express.Router()

router.get('/search/:keyword', async (req, res) => {
  const threadId = uuidv1()
  const headers = req.headers
  const xid = headers.xid || threadId
  const body = req.body
  const keyword = req.params.keyword
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
    data: {}
  }

  try {
    if (!keyword) {
      response.responseCode = constantCode.invalidRequest
      response.responseMessage = 'invalid request'
      logging.content.response = response
      log.te(xid, '', logging.title, logging.content.response)
      return res.status(200).json(response)
    }

    const movies = await omdb.searchMovie(xid, keyword)
    response.data = movies.Search
    logging.content.response = response
    log.te(xid, '', logging.title, logging.content.response)
    return res.status(200).json(response)
  } catch (error) {
    response.responseCode = constantCode.error
    response.responseMessage = error.message
    logging.content.response = response
    log.te(xid, '', logging.title, logging.content.response)
    return res.status(200).json(response)
  }
})

router.get('/:imdbID', async (req, res) => {
  const threadId = uuidv1()
  const headers = req.headers
  const xid = headers.xid || threadId
  const body = req.body
  const imdbID = req.params.imdbID
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
    data: {}
  }

  try {
    const movie = await omdb.getMovieDetail(xid, imdbID)
    response.data = movie
    logging.content.response = response
    log.te(xid, '', logging.title, logging.content.response)
    return res.status(200).json(response)
  } catch (error) {
    response.responseCode = constantCode.error
    response.responseMessage = error.message
    logging.content.response = response
    log.te(xid, '', logging.title, logging.content.response)
    return res.status(200).json(response)
  }
})

module.exports = router