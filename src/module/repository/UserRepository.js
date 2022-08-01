
const knex = require('../../database/index')

class UserRepository {

  async create(user) {
    return await knex('users').insert(user)
  }

  async getOnlyOneUser(user) {
    return await knex('users')
    .select('*')
    .where({name: user})
    .orWhere({email: user})
    .orWhere({idade: user})
    .first()
  }

  async deleteUser(user) {
    return await knex('users')
    .where({ name: user.name })
    .del()
  }
}

module.exports = UserRepository