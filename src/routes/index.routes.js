const Router = require('koa-router'); 

const router = new Router()
const PORT = process.env.PORT || 3000;

const UserController = require('../module/controller/UserController')
const userController = new UserController()

router
  .get('/', async ctx => {
    ctx.body = `Seu servidor esta rodando em http://localhost:${PORT}`; //http://localhost:3000/
  })

  .get('/users', async ctx => {
    ctx.status = 200;
    ctx.body = {total:0, count: 0, rows:[]}
  })

  .post("/user", userController.newUser)

  .get(`/user/:user`, userController.getUser)

  .delete('/user/:name', userController.removeUser)

module.exports = router 
