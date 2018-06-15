'use strict';

const home = require('./home');

const routes = (app) => {
  app.use(home.routes());
};

module.exports = { routes };
