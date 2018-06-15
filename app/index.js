// Load config
const config = require('./config');
// Load logger
const logger = require('./lib/logger');
// Load utils
const U = require('./lib/utils');
// Load APM on production environment
const apm = require('./apm');

// App instance
const app = require('./app');

// Error handler
function onError(err) {
  if (apm.active)
    apm.captureError(err);
  logger.error({ err, event: 'error' }, 'Unhandled exception occured');
}

// Handle uncaught errors
app.on('error', onError);

const host = U._.get(config, 'service.host', '127.0.0.1');
const port = U._.get(config, 'service.port', 7070);

// Service listening
const server = app.listen(port, host, () => {
  logger.info({ event: 'execute' }, `API server listening on ${host}:${port}!`);
});

server.on('error', onError);
