const constant = require('../utils/constant')
const logger = require('../utils/logger')
const util = require('util')

const mysql = require('mysql');
const pool  = mysql.createPool({
  connectionLimit : constant.DB_POOL,
  host            : constant.DB_HOST,
  port            : constant.DB_PORT,
  user            : constant.DB_USR,
  password        : constant.DB_PWD,
  database        : constant.DB_NM,
  timezone        : '+07:00'
})
pool.getConnection((err, connection) => {
  if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          logger.error('Database connection was closed.')
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
          logger.error('Database has too many connections.')
      }
      if (err.code === 'ECONNREFUSED') {     
          logger.error('Database connection was refused.')
      }
  }
  if (connection) {
    logger.info('Database connection was '+connection.state)
    connection.release()
  }
  return
})

pool.query = util.promisify(pool.query)

module.exports = { pool }