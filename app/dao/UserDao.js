const User = require('../models/user')

class UserDao {

  async createUser(userInfo) {
    const user = await new User(userInfo).save()
    return user
  }

  async findById(id) {
    const user = await User.findById(id)
    return user
  }

  async deleteUser(id) {
    await User.findByIdAndRemove(id)
  }

  async findAllUsers() {
    const users = await User.find()
    return users
  }
}


module.exports = new UserDao()