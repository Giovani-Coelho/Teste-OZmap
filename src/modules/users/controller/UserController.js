const users = []

const createUser = async (ctx) => {
    const { name, email, idade } = ctx.request.body

    if (idade < 18) {
      return ctx.response.status = 400, ctx.response.body = {error: "Usuario menor de idade"}
    }

    users.push({name, email, idade})

    return ctx.response.status = 201
}

const listUser = async (ctx) => {
  ctx.body = users
}

module.exports = {createUser, listUser}