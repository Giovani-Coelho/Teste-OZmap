//Voce deve rodar os testes usando:  npm test
//Para testar a aplicação, rode: npm run dev

//mais infos
//https://github.com/ZijianHe/koa-router

// todas as configuraçoes devem ser passadas via environment variables

import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT ;

import {openDb}  from "./database/config.js"
import Koa from 'koa'
import bodyParser from "koa-bodyparser"
import json from "koa-json"
import { router } from "./routes/index.routes.js"

const app = new Koa()

openDb()
app.use(bodyParser())
app.use(json())

app
  .use(router.routes())
  .use(router.allowedMethods())

export default app.listen(PORT, console.log("Server is Running!"))