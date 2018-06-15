'use strict';

const path = require('path');
const { env, logger } = require('./');


const directory = process.env.LOG_DIRECTORY || path.join(__dirname, '../../');
const filename = process.env.LOG_FILENAME || `${logger.name}.${env}.json.log`;

// Add streams as depending on the environment
if (env === 'production') {
  logger.streams.push({
    type: 'rotating-file',
    path: path.join(directory, filename),
    period: '1d',
    count: 7,
    level: process.env.LOG_LEVEL || 'info'
  });
  logger.streams.push({
    type: 'stream',
    stream: process.stderr,
    level: 'warn'
  });
} else if (env === 'development') {
  logger.streams.push({
    type: 'stream',
    stream: process.stdout,
    level: 'debug'
  });
}

module.exports = logger;
