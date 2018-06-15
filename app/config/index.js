'use strict';

const dotenv = require('dotenv');

dotenv.config();

const env = process.env.NODE_ENV || 'development';

const config = require(`./config.${env}`);

config.env = env;

module.exports = config;
