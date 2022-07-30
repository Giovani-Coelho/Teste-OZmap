const {getUser} = require("../repository/UserRepository")

const users = []

// criar um novo usuario
const createUser = async (ctx) => {
    const { name, email, idade } = ctx.request.body

    if (idade < 18) {
      ctx.response.body = {error: "Usuario menor de idade"},
      ctx.response.status = 400
      
      return 
    }

    users.push({name, email, idade})

    return ctx.response.status = 201
}

const userNotExist = (ctx) => {
  // const name = ctx.request.query.name
  const name = ctx.request.url.split("/")[2]

  const user = getUser(users, name)

  if (!user) {
    ctx.body = { error: "User not found" }
    ctx.status = 404
    return
  }
  
  ctx.body = users
  ctx.response.status = 200
  return
}

module.exports = { createUser, userNotExist, users }