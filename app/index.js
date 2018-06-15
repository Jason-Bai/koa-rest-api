// Load config
const config = require('./config');
// Load logger
const logger = require('./lib/logger');
// Load APM on production environment
const apm = require('./apm');

const app = require('./app');

function onError(err) {
  if (apm.active)
    apm.captureError(err);
  logger.error({ err, event: 'error' }, 'Unhandled exception occured');
}

// Handle uncaught errors
app.on('error', onError);

const server = app.listen(config.port, config.host, () => {
  logger.info({ event: 'execute' }, `API server listening on ${config.host}:${config.port}, in ${config.env}`);
});

server.on('error', onError);
