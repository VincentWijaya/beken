const expect = require('chai').expect
const nock = require('nock')

const { constant } = require('../../utils')
const omdb = require('../../apps/service/omdb')
const mock = require('./mocks/movies')

describe('test omdb service', () => {
  after(() => {
    nock.restore();
  })

  afterEach(() => {
    nock.cleanAll()
  })

  describe('test search movies', () => {
    it('should success and send all the movies', async () => {
      const moviesScope = await nock('https://www.omdbapi.com')
        .get('/?s=marvel&apikey=' + constant.OMDB_APIKEY)
        .reply(200,  mock.getAllMoviesSuccess, { 'Content-Type': 'application/json' })

      const movies = await omdb.searchMovie('asdasdasdasdsd', 'marvel')

      expect(movies.Response).to.equal('True')
      expect(movies.totalResults).to.equal('233')
      expect(movies.Search).to.have.lengthOf(6)

      moviesScope.done()
    })

    it('should success even when data is null', async () => {
      const moviesScope = await nock('https://www.omdbapi.com')
        .get('/?s=marvel&apikey=' + constant.OMDB_APIKEY)
        .reply(200,  mock.getAllMoviesSuccessNoData, { 'Content-Type': 'application/json' })

      const movies = await omdb.searchMovie('asdasdasdasdsd', 'marvel')

      expect(movies.Response).to.equal('True')
      expect(movies.totalResults).to.equal('0')
      expect(movies.Search).to.have.lengthOf(0)

      moviesScope.done()
    })

    it('should error when response is false', async () => {
      const moviesScope = await nock('https://www.omdbapi.com')
        .get('/?s=marvel&apikey=' + constant.OMDB_APIKEY)
        .reply(200,  mock.getAllMoviesFailed, { 'Content-Type': 'application/json' })

      try {
        await omdb.searchMovie('asdasdasdasdsd', 'marvel')
        expect(omdb.searchMovie('asdasdasdasdsd', 'marvel')).to.throw(Error('Error Search Movie from OMDB'))
      } catch (error) {
        expect(error.message).to.equal('Error: Error Search Movie from OMDB')
      }

      moviesScope.done()
    })

    it('should error when response not 200', async () => {
      const moviesScope = await nock('https://www.omdbapi.com')
        .get('/?s=marvel&apikey=' + constant.OMDB_APIKEY)
        .reply(500,  mock.getAllMoviesFailed, { 'Content-Type': 'application/json' })

      try {
        await omdb.searchMovie('asdasdasdasdsd', 'marvel')
        expect(omdb.searchMovie('asdasdasdasdsd', 'marvel')).to.throw(Error('Request failed with status code 500'))
      } catch (error) {
        expect(error.message).to.equal('Error: Request failed with status code 500')
      }

      moviesScope.done()
    })
  })

  describe('test get movie detail', () => {
    it('should success and send the movie detail', async () => {
      const moviesScope = await nock('https://www.omdbapi.com')
        .get('/?i=tt2011118&apikey=' + constant.OMDB_APIKEY)
        .reply(200,  mock.getMovieSuccess, { 'Content-Type': 'application/json' })

      const movies = await omdb.getMovieDetail('asdasdasdasdsd', 'tt2011118')

      expect(movies.Response).to.equal('True')
      expect(movies.Language).to.equal('English')
      expect(movies.Ratings).to.have.lengthOf(1)

      moviesScope.done()
    })

    it("should error when there's Error in response key", async () => {
      const moviesScope = await nock('https://www.omdbapi.com')
      .get('/?i=tt2011118&apikey=' + constant.OMDB_APIKEY)
      .reply(200,  mock.getMovieFailed, { 'Content-Type': 'application/json' })

      try {
        await omdb.getMovieDetail('asdasdasdasdsd', 'tt2011118')
        expect(omdb.getMovieDetail('asdasdasdasdsd', 'tt2011118')).to.throw(Error('Error Get Movie Detail from OMDB'))
      } catch (error) {
        expect(error.message).to.equal('Error: Error Get Movie Detail from OMDB')
      }

      moviesScope.done()
    })

    it('should error when response is false', async () => {
      const moviesScope = await nock('https://www.omdbapi.com')
        .get('/?i=tt2011118&apikey=' + constant.OMDB_APIKEY)
        .reply(200,  mock.getAllMoviesFailed, { 'Content-Type': 'application/json' })

      try {
        await omdb.getMovieDetail('asdasdasdasdsd', 'tt2011118')
        expect(omdb.getMovieDetail('asdasdasdasdsd', 'tt2011118')).to.throw(Error('Error Get Movie Detail from OMDB'))
      } catch (error) {
        expect(error.message).to.equal('Error: Error Get Movie Detail from OMDB')
      }

      moviesScope.done()
    })

    it('should error when response not 200', async () => {
      const moviesScope = await nock('https://www.omdbapi.com')
        .get('/?i=tt2011118&apikey=' + constant.OMDB_APIKEY)
        .reply(500,  mock.getAllMoviesFailed, { 'Content-Type': 'application/json' })

      try {
        await omdb.getMovieDetail('asdasdasdasdsd', 'tt2011118')
        expect(omdb.getMovieDetail('asdasdasdasdsd', 'tt2011118')).to.throw(Error('Request failed with status code 500'))
      } catch (error) {
        expect(error.message).to.equal('Error: Request failed with status code 500')
      }

      moviesScope.done()
    })
  })
})