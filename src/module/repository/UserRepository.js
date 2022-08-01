
const knex = require('../../database/index')

class UserRepository {

  async create(user) {
    return await knex('users').insert(user)
  }

  async justOneUser(user) {
    return await knex('users')
    .select('*')
    .where({name: user})
    .orWhere({email: user})
    .orWhere({idade: user})
    .first()
  }
}

module.exports = UserRepository