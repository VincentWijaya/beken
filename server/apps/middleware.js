const db = require('../config/mysql')

const logRequestToDB = (req, res, next) => {
  const endpoint = req.url
  const body = JSON.stringify(req.body)
  const dateTime = new Date().toISOString()

  db.pool.query(`INSERT INTO log(endpoint, payload, created_at) VALUES (?, ?, '${dateTime}')`,[endpoint, body])

  next()
}

module.exports = {
  logRequestToDB
}