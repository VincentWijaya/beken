const VERSION_URL = process.env['VERSION_URL'] || 'v1'
const SERVICE_NAME = process.env.SERVICE_NAME || 'beken'
const PORT = process.env.PORT || 3000
const LOG_DIR = process.env.LOG_DIR || 'logs'
const DEFAULT_TIMEOUT = process.env.DEFAULT_TIMEOUT || 10000
const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_PORT = process.env.DB_PORT || 3306
const DB_USR = process.env.DB_USR || 'root'
const DB_PWD = process.env.DB_PWD || 'root'
const DB_NM = process.env.DB_NM || 'beken'
const DB_POOL = process.env.POOL || 10

module.exports = {
  VERSION_URL,
  SERVICE_NAME,
  PORT,
  LOG_DIR,
  DEFAULT_TIMEOUT,
  DB_HOST,
  DB_PORT,
  DB_USR,
  DB_PWD,
  DB_NM,
  DB_POOL
}