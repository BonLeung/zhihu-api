const UserDao = require('../dao/UserDao')
const Utils = require('../utils') 
const CommonError = require('../errors/CommonError')
const ResultVOUtil = require('../utils/ResultVOUtil')

class UserController {
  async find(ctx) {
    try {
      const users = await UserDao.findAllUsers()
      ctx.body = ResultVOUtil.success(users)
    } catch (error) {
      throw new CommonError(500, '-1', '获取用户列表失败')
    }
  }

  async findById(ctx) {  
    try {
      const user = await UserDao.findById(ctx.params.id)
      ctx.body = ResultVOUtil.success(user)
    } catch (error) {
      throw new CommonError(500, '-1', '获取用户信息失败')
    }
  }

  async delete(ctx) {
    try {
      await UserDao.deleteUser(ctx.params.id)
      ctx.body = ResultVOUtil.success()
      ctx.status = 204  
    } catch (error) {
      console.log(error)
      throw new CommonError(500, '-1', '删除用户失败')
    }
  }

  async create(ctx) {
    Utils.verifyParams(ctx, {
      name: {
        type: 'string',
        required: true
      }
    })
    try {
      const user = await UserDao.createUser(ctx.request.body)
      ctx.body = ResultVOUtil.success(user)
    } catch (error) {
      throw new CommonError(500, '-1', '创建用户失败')
    }
  }
}

module.exports = new UserController()