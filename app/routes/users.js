const Router = require('koa-router')
const router = new Router({prefix: '/users'})
const userController = require('../controllers/UserCtrl')

router.get('/', userController.find)
router.get('/:id', userController.findById)
router.delete('/:id', userController.delete)
router.post('/', userController.create)

module.exports = router