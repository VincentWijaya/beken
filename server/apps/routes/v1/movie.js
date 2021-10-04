const express = require('express')
const { searchMovie, getMovieDetail } = require('../../controller/movie')

const router = express.Router()

router.get('/search/:keyword', searchMovie)
router.get('/detail/:imdbID', getMovieDetail)

module.exports = router