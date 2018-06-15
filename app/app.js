const Koa = require('koa');
const middlewares = require('./middlewares');
const router = require('./routes');

const app = new Koa();

// Trust proxy
app.proxy = true;

// Set middlewares
middlewares.common(app);

// Bootstrap application router
router.routes(app);

// Expose app
module.exports = app;
