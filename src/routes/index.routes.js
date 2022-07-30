import Router from 'koa-router'
import { createUser, userNotExist } from '../modules/users/controller/UserController.js'

const router = new Router()
const PORT = process.env.PORT || 3000;


router
  .get('/', async ctx => {
    ctx.body = `Seu servidor esta rodando em http://localhost:${PORT}`; //http://localhost:3000/
  })

  .get('/users', async ctx => {
    ctx.status = 200;
    ctx.body = {total:0, count: 0, rows:[]}
  })
  
  .post("/user", createUser)

  .get(`/user/:naoExiste`, userNotExist)


export { router }
