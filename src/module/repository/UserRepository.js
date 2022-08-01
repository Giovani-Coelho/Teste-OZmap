
const knex = require('../../database/index')


class UserRepository {

  async create(user) {
    return await knex('users').insert(user)
  }

}

module.exports = UserRepository