const db = require('./extensions/db');

module.exports = {
  // API
  service: {
    name: process.env.APP_NAME,
    host: process.env.APP_HOST,
    port: process.env.APP_PORT,
  },
  // logger
  logger: {
    name: 'KOA REST API',
    streams: [],
    logDir: process.env.LOG_DIRECTORY,
    logLevel: process.env.LOG_LEVEL,
  },
  // Database
  db,
};
