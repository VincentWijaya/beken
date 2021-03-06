const uuidv1 = require('uuid/v1')
const { log, constantCode } = require('../../utils')
const { omdb } = require('../service')

const searchMovie = async (req, res) => {
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
    data: {}
  }

  try {
    const movies = await omdb.searchMovie(xid, req.params.keyword, req.query.page)
    response.data.movies = movies.Search
    response.data.totalPage = Math.ceil(Number(movies.totalResults) / movies.Search.length)

    logging.content.response = response
    log.te(xid, '', logging.title, logging.content.response)
    return res.status(200).json(response)
  } catch (error) {
    response.status = constantCode.error
    response.message = error.message
    logging.content.response = response
    log.te(xid, '', logging.title, logging.content.response)
    return res.status(200).json(response)
  }
}

const getMovieDetail = async (req, res) => {
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
    response.status = constantCode.error
    response.message = error.message
    logging.content.response = response
    log.te(xid, '', logging.title, logging.content.response)
    return res.status(200).json(response)
  }
}

module.exports = {
  searchMovie,
  getMovieDetail,
}