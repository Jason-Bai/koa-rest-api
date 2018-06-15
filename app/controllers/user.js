const models = require('../models');

exports.list = async (ctx) => {
  const users = await models.user.findAll();
  ctx.res.ok(users, 'OK');
};
