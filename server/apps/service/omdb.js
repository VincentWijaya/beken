const axios = require('axios')
const constant = require('../../utils/constant')
const logger = require('../../utils/logger')

const searchMovie = async(xid, keyword) => {
  try {
    const request = {
      method: 'GET',
      headers: {
        xid: xid,
      },
      url: constant.OMDB_URL + '/',
      params: {
        s: keyword,
        apikey: constant.OMDB_APIKEY
      }
    }

    logger.info(`${xid} | Request Search Movie to OMDB: ${JSON.stringify(request)}`)
    const response = await axios(request)
    logger.info(`${xid} | Response Search Movie from OMDB: ${JSON.stringify(response.data)}`)

    const data = response.data
    if (data.Response != 'True' || data.Error) {
      throw new Error('Error Search Movie from OMDB')
    }

    return data
  } catch (error) {
    logger.error(`${xid} | ERROR Hit OMDB API: ${JSON.stringify(error.message)}`)
    throw new Error(error)
  }
}

const getMovieDetail = async(xid, imdbID) => {
  try {
    const request = {
      method: 'GET',
      headers: {
        xid: xid,
      },
      url: constant.OMDB_URL + '/',
      params: {
        i: imdbID,
        apikey: constant.OMDB_APIKEY
      }
    }

    logger.info(`${xid} | Request Get Movie Detail to OMDB: ${JSON.stringify(request)}`)
    const response = await axios(request)
    logger.info(`${xid} | Response Get Movie Detail from OMDB: ${JSON.stringify(response.data)}`)

    const data = response.data
    if (data.Response != 'True' || data.Error) {
      throw new Error('Error Get Movie Detail from OMDB')
    }

    return data
  } catch (error) {
    logger.error(`${xid} | ERROR Hit OMDB API: ${JSON.stringify(error.message)}`)
    throw new Error(error)
  }
}

module.exports = {
  searchMovie,
  getMovieDetail
}