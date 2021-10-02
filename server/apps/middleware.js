const db = require('../config/mysql')

const logRequestToDB = (req, res, next) => {
  console.log(req)
  next()
}

module.exports = {
  logRequestToDB
}