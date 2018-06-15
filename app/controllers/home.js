'use strict';

const pkginfo = require('../../package.json');
const spec = require('../spec');


exports.welcome = ctx => {
  // BUSINESS LOGIC
  const data = {
    name: pkginfo.name,
    version: pkginfo.version,
    description: pkginfo.description,
    author: pkginfo.author
  };

  ctx.res.ok(data, 'Hello, API!');
};

exports.showSwaggerSpec = ctx => {
  ctx.body = spec;
};
