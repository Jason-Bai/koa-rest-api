'use strict';

const home = require('./home');
const user = require('./user');

const routes = (app) => {
  app.use(home.routes());
  app.use(user.routes());
};

module.exports = { routes };
