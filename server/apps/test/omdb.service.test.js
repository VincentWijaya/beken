const expect = require("chai").expect
const nock = require("nock")

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
      const moviesScope = await nock("https://www.omdbapi.com")
        .get("/?s=marvel&apikey=" + constant.OMDB_APIKEY)
        .reply(200,  mock.getAllMoviesSuccess, { 'Content-Type': 'application/json' })

      const movies = await omdb.searchMovie("asdasdasdasdsd", "marvel")

      expect(movies.Response).to.equal("True")
      expect(movies.totalResults).to.equal("233")
      expect(movies.Search).to.have.lengthOf(6)

      moviesScope.done()
    })

    it("should success even when data is null", async () => {
      const moviesScope = await nock("https://www.omdbapi.com")
        .get("/?s=marvel&apikey=" + constant.OMDB_APIKEY)
        .reply(200,  mock.getAllMoviesSuccessNoData, { 'Content-Type': 'application/json' })

      const movies = await omdb.searchMovie("asdasdasdasdsd", "marvel")

      expect(movies.Response).to.equal("True")
      expect(movies.totalResults).to.equal("0")
      expect(movies.Search).to.have.lengthOf(0)

      moviesScope.done()
    })

    it("should failed when response is false", async () => {
      const moviesScope = await nock("https://www.omdbapi.com")
        .get("/?s=marvel&apikey=" + constant.OMDB_APIKEY)
        .reply(200,  mock.getAllMoviesFailed, { 'Content-Type': 'application/json' })

      try {
        await omdb.searchMovie("asdasdasdasdsd", "marvel")
        expect(omdb.searchMovie("asdasdasdasdsd", "marvel")).to.throw(Error('Error Search Movie from OMDB'))
      } catch (error) {
        expect(error.message).to.equal('Error: Error Search Movie from OMDB')
      }

      moviesScope.done()
    })

    it("should failed when response not 200", async () => {
      const moviesScope = await nock("https://www.omdbapi.com")
        .get("/?s=marvel&apikey=" + constant.OMDB_APIKEY)
        .reply(500,  mock.getAllMoviesFailed, { 'Content-Type': 'application/json' })

      try {
        await omdb.searchMovie("asdasdasdasdsd", "marvel")
        expect(omdb.searchMovie("asdasdasdasdsd", "marvel")).to.throw(Error('Request failed with status code 500'))
      } catch (error) {
        expect(error.message).to.equal('Error: Request failed with status code 500')
      }

      moviesScope.done()
    })
  })
})