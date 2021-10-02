const VERSION_URL = process.env['VERSION_URL'] || 'v1'
const SERVICE_NAME = process.env.SERVICE_NAME || 'beken'
const PORT = process.env.PORT || 3000
const LOG_DIR = process.env.LOG_DIR || 'logs'
const DEFAULT_TIMEOUT = process.env.DEFAULT_TIMEOUT || 10000

module.exports = {
  VERSION_URL,
  SERVICE_NAME,
  PORT,
  LOG_DIR,
  DEFAULT_TIMEOUT
}