
const UserRepository = require('../repository/UserRepository.js') 
const userRepository = new UserRepository() 

class UserController {

  newUser(ctx) {
    const { name, email, idade } = ctx.request.body

    if (idade < 18) {
      ctx.body = { error: "Usuario menor de idade"}
      ctx.response.status = 400
      return 
    }

    userRepository.create({name, email, idade})

    return ctx.response.status = 201
  }

}

module.exports = UserController