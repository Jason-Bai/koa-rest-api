const config = require('./base');

// db
config.db.name = 'koarest_test';
config.db.user = 'root';
config.db.pass = '12345678';
config.db.operatorsAliases = false;

module.exports = config;
