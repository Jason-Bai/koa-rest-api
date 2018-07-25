'use strict';

const path = require('path');
const bunyanLogStashTcp = require('bunyan-logstash-tcp');
const { env, logger } = require('./');


const directory = process.env.LOG_DIRECTORY || path.join(__dirname, '../../');
const filename = process.env.LOG_FILENAME || `${logger.name}.${env}.json.log`;

// Add streams as depending on the environment
if (env === 'production') {
  const isFile = process.env.LOG_TYPE === 'file';

  if (isFile) {
    // output to file
    logger.streams.push({
      type: 'rotating-file',
      path: path.join(directory, filename),
      period: '1d',
      count: 7,
      level: process.env.LOG_LEVEL || 'info'
    });
  } else {
    // output to logstash
    logger.streams.push({
      type: 'raw',
      stream: bunyanLogStashTcp.createStream({
        application: process.env.APP_NAME,
        host: process.env.LOGSTASH_HOST || '127.0.0.1',
        port: process.env.LOGSTASH_PORT || '5044',
        level: process.env.LOG_LEVEL || 'info'
      }),
    });
  }


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
