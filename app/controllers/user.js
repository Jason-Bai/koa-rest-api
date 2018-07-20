const models = require('../models');

exports.list = async (ctx) => {
  const users = await models.user.findAll();
  ctx.res.ok(users, 'OK');
};

exports.detail = async (ctx) => {
  const { id } = ctx.params;

  const user = await models.user.findOne({ where: { id } });

  ctx.res.ok(user, 'OK');
};
