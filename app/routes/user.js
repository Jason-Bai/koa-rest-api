const Router = require('koa-router');
const controllers = require('../controllers');

const router = new Router();

router.get('/users', controllers.user.list);

module.exports = router;
