
const knex = require('../../database/index')


class UserRepository {

  async create(user) {
    return await knex('users').insert(user)
  }

  async getUserByEmail(email) {
    return await knex('users')
    .select('email')
    .where({ email: email })
    .first()
  }
}

module.exports = UserRepository