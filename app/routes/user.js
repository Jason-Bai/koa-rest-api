const Router = require('koa-router');
const controllers = require('../controllers');

const router = new Router({
  prefix: '/users',
});

router.get('/', controllers.user.list);

router.get('/:id', controllers.user.detail);

module.exports = router;
