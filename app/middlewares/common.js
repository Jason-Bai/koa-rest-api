const bodyParser = require('koa-bodyparser');
const cors = require('kcors');
const helmet = require('koa-helmet');
const errorHandler = require('./errorHandler');
const loggerMiddleware = require('./logger');
const requestId = require('./requestId');
const responseHandler = require('./responseHandler');

module.exports = (app) => {
  app.use(helmet());
  app.use(
    bodyParser({
      enableTypes: ['json', 'form'],
      formLimit: '10mb',
      jsonLimit: '10mb'
    })
  );
  app.use(requestId());
  app.use(
    cors({
      origin: '*',
      allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
      exposeHeaders: ['X-Request-Id']
    })
  );
  app.use(responseHandler());
  app.use(errorHandler());
  app.use(loggerMiddleware());
};
