const router = require('koa-router')();
const user = require('../controllers/user.js')
const artical = require('../controllers/artical.js')
const say = require('../controllers/say.js')
const visitor = require('../controllers/visitor.js')
const webchat = require('../controllers/webchat.js')
const upload = require('../controllers/upload.js')

router.post('/login', user.login);
router.post('/user/create', user.create)
router.post('/user/delete', user.delete)
router.post('/user/list', user.list)

router.post('/artical/delete',artical.delete);
router.post('/artical/edit',artical.edit);
router.post('/artical/create',artical.create);
router.post('/artical/list',artical.list);

router.post('/say/delete',say.delete);
router.post('/say/list',say.list);
router.post('/say/create',say.create);

router.post('/add/visitor',visitor.add);
router.post('/count/visitor',visitor.count);

router.get('/webchat/check', webchat.check);

router.post('/image/upload', upload.image);

module.exports = router