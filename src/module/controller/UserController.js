
const UserRepository = require('../repository/UserRepository.js') 
const userRepository = new UserRepository() 

class UserController {

  async newUser(ctx) {
    const { name, email, idade } = ctx.request.body
    const emailAlreadyExists = await userRepository.getUserByEmail(email)

    if (emailAlreadyExists) {
      ctx.body = { error: "User Already Exists"}
      ctx.response.status = 400
      return
    }

    if (idade < 18) {
      ctx.body = { error: "Usuario menor de idade"}
      ctx.response.status = 400
      return 
    }

    await userRepository.create({name, email, idade})

    return ctx.response.status = 201
  }

  async userNaoExiste() {

  }

}

module.exports = UserController