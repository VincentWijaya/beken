const expect = require('chai').expect
const request = require('supertest')

const app = require('../../index')

describe('Test all endpoint', () => {
  it('GET /v1/movie/search/:keyword should be success', (done) => {
    request(app)
      .get('/v1/movie/search/marvel')
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((res) => {
        expect(res.body.status).to.be.equal('00')
        expect(res.body.data.movies.length).to.be.equal(10)
      })
      .end((err, res) => {
        if (err) return done(err)
        return done()
      })
  })
  it('GET /v1/movie/detail/tt4154664 shoud be success', (done) => {
    request(app)
      .get('/v1/movie/detail/tt4154664')
      .expect("Content-Type", /json/)
      .expect(200)
      .expect((res) => {
        expect(res.body.status).to.be.equal('00')
        expect(res.body.data.Title).to.be.equal('Captain Marvel')
      })
      .end((err, res) => {
        if (err) return done(err)
        return done()
      })
  })
})
