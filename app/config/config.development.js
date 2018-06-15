const config = require('./base');

// db
config.db.user = 'root';
config.db.pass = '12345678';
config.db.logging = console.log;

module.exports = config;
