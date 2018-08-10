const router = require('koa-router')();
const user = require('../controllers/user.js')
const artical = require('../controllers/artical.js')

router.post('/login', user.login)

router.post('/artical/delete',artical.delete);

router.post('/artical/edit',artical.edit);

router.post('/artical/create',artical.create);

router.post('/artical/list',artical.list);

module.exports = router